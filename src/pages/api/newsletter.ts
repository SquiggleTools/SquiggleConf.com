import type { APIRoute } from "astro";

import {
	BREVO_API_KEY,
	BREVO_DOI_TEMPLATE_ID,
	BREVO_LIST_ID,
} from "astro:env/server";
import { z } from "zod";

export const prerender = false;

const bodySchema = z.object({
	email: z.email(),
	website: z.string().optional(),
});

type Outcome = "error" | "invalid" | "pending" | "unavailable";

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
	unavailable: { message: "Newsletter signup is unavailable", status: 503 },
};

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

async function subscribe(request: Request): Promise<Outcome> {
	if (!BREVO_API_KEY) {
		return "unavailable";
	}

	const body = bodySchema.safeParse(
		Object.fromEntries(await request.formData().catch(() => [])),
	);
	if (body.error) {
		return "invalid";
	}

	if (body.data.website) {
		return "pending";
	}

	try {
		const response = await fetch(
			"https://api.brevo.com/v3/contacts/doubleOptinConfirmation",
			{
				body: JSON.stringify({
					email: body.data.email,
					includeListIds: [BREVO_LIST_ID],
					redirectionUrl: new URL("/#newsletter-confirmed", request.url).href,
					templateId: BREVO_DOI_TEMPLATE_ID,
				}),
				headers: {
					"api-key": BREVO_API_KEY,
					"Content-Type": "application/json",
				},
				method: "POST",
			},
		);

		if (response.ok) {
			return "pending";
		}

		const json: unknown = await response.json().catch(() => undefined);
		console.error("Brevo signup failed", response.status, json);
	} catch (error) {
		console.error(error);
	}

	return "error";
}
