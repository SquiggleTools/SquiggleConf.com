import type { APIRoute } from "astro";

import {
	BREVO_API_KEY,
	BREVO_DOI_TEMPLATE_ID,
	BREVO_LIST_ID,
	TURNSTILE_SECRET_KEY,
} from "astro:env/server";
import { z } from "zod";

export const prerender = false;

const bodySchema = z.object({
	"cf-turnstile-response": z.string().optional(),
	email: z.email(),
	website: z.string().optional(),
});

const turnstileSchema = z.object({
	"error-codes": z.array(z.string()).optional(),
	success: z.boolean(),
});

const turnstileUserErrors = new Set([
	"invalid-input-response",
	"missing-input-response",
	"timeout-or-duplicate",
]);

type Outcome =
	| "error"
	| "invalid"
	| "pending"
	| "subscribed"
	| "unavailable"
	| "unverified";

const responses: Record<Outcome, { message: string; status: number }> = {
	error: {
		message: "We couldn't sign you up right now. Please try again later.",
		status: 502,
	},
	invalid: { message: "Please enter a valid email address.", status: 400 },
	pending: {
		message: "Almost there! Check your email to confirm your subscription.",
		status: 200,
	},
	subscribed: { message: "Thanks for signing up!", status: 200 },
	unavailable: { message: "Newsletter signup is unavailable", status: 503 },
	unverified: {
		message: "We couldn't verify your signup. Please try again.",
		status: 403,
	},
};

const suspiciousDomains = new Set([
	"aol.com",
	"att.net",
	"bellsouth.net",
	"charter.net",
	"comcast.net",
	"cox.net",
	"hotmail.com",
	"live.com",
	"msn.com",
	"sbcglobal.net",
	"verizon.net",
	"yahoo.com",
	"ymail.com",
]);

export const POST: APIRoute = async ({ request }) => {
	const outcome = await subscribe(request);

	if (
		request.headers.get("sec-fetch-mode") === "navigate" ||
		request.headers.get("accept")?.includes("text/html")
	) {
		return Response.redirect(
			new URL(`/#newsletter-${outcome}`, request.url),
			303,
		);
	}

	const { message, status } = responses[outcome];
	return new Response(message, { status });
};

function isBrevoDuplicateIdentifier(json: unknown) {
	return (
		typeof json === "object" &&
		!!json &&
		"code" in json &&
		json.code === "duplicate_parameter"
	);
}

function looksSuspicious(email: string) {
	const at = email.lastIndexOf("@");
	const local = email.slice(0, at).toLowerCase();
	const domain = email.slice(at + 1).toLowerCase();

	return (
		suspiciousDomains.has(domain) ||
		(domain === "gmail.com" && local.split(".").length > 3) ||
		/^[a-z]{16,}\d*$/.test(local)
	);
}

async function sendToBrevo(path: string, body: object) {
	return await fetch(`https://api.brevo.com/v3/contacts${path}`, {
		body: JSON.stringify(body),
		headers: {
			"api-key": BREVO_API_KEY ?? "",
			"Content-Type": "application/json",
		},
		method: "POST",
	});
}

async function subscribe(request: Request): Promise<Outcome> {
	if (!BREVO_API_KEY || !TURNSTILE_SECRET_KEY) {
		return "unavailable";
	}

	const body = bodySchema.safeParse(
		Object.fromEntries(await request.formData().catch(() => [])),
	);
	if (body.error) {
		return "invalid";
	}

	if (body.data.website) {
		return "subscribed";
	}

	const { email } = body.data;

	try {
		if (!(await verifyTurnstile(body.data["cf-turnstile-response"], request))) {
			return "unverified";
		}

		const pending = looksSuspicious(email);
		const response = pending
			? await sendToBrevo("/doubleOptinConfirmation", {
					email,
					includeListIds: [BREVO_LIST_ID],
					redirectionUrl: new URL("/#newsletter-confirmed", request.url).href,
					templateId: BREVO_DOI_TEMPLATE_ID,
				})
			: await sendToBrevo("", {
					email,
					listIds: [BREVO_LIST_ID],
					updateEnabled: true,
				});

		if (response.ok) {
			return pending ? "pending" : "subscribed";
		}

		const json: unknown = await response.json().catch(() => undefined);
		if (isBrevoDuplicateIdentifier(json)) {
			return pending ? "pending" : "subscribed";
		}

		console.error("Brevo signup failed", response.status, json);
	} catch (error) {
		console.error(error);
	}

	return "error";
}

async function verifyTurnstile(token: string | undefined, request: Request) {
	if (!token) {
		return false;
	}

	const response = await fetch(
		"https://challenges.cloudflare.com/turnstile/v0/siteverify",
		{
			body: JSON.stringify({
				remoteip: request.headers.get("cf-connecting-ip") ?? undefined,
				response: token,
				secret: TURNSTILE_SECRET_KEY,
			}),
			headers: { "Content-Type": "application/json" },
			method: "POST",
		},
	);

	const json: unknown = await response.json().catch(() => undefined);
	const result = turnstileSchema.safeParse(json);
	if (!result.success) {
		throw new Error(
			`Turnstile verification failed: ${String(response.status)}`,
			{
				cause: json,
			},
		);
	}

	const errorCodes = result.data["error-codes"] ?? [];
	if (errorCodes.some((code) => !turnstileUserErrors.has(code))) {
		throw new Error(`Turnstile verification errored: ${errorCodes.join(", ")}`);
	}

	return result.data.success;
}
