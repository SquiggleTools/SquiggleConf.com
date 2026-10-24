import type { APIRoute } from "astro";

import { BREVO_API_KEY, BREVO_LIST_ID } from "astro:env/server";
import { z } from "zod";

export const prerender = false;

const bodySchema = z.object({
	email: z.email(),
	website: z.string().optional(),
});

type Outcome = "error" | "invalid" | "subscribed" | "unavailable";

const responses: Record<Outcome, { message: string; status: number }> = {
	error: {
		message: "We couldn't sign you up right now. Please try again later.",
		status: 502,
	},
	invalid: { message: "Please enter a valid email address.", status: 400 },
	subscribed: { message: "Thanks for signing up!", status: 200 },
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

function isBrevoDuplicateIdentifier(json: unknown) {
	return (
		typeof json === "object" &&
		!!json &&
		"code" in json &&
		json.code === "duplicate_parameter"
	);
}

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
		return "subscribed";
	}

	try {
		const response = await fetch("https://api.brevo.com/v3/contacts", {
			body: JSON.stringify({
				email: body.data.email,
				listIds: [BREVO_LIST_ID],
				updateEnabled: true,
			}),
			headers: {
				"api-key": BREVO_API_KEY,
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		if (response.ok) {
			return "subscribed";
		}

		const json: unknown = await response.json().catch(() => undefined);
		if (isBrevoDuplicateIdentifier(json)) {
			return "subscribed";
		}

		console.error("Brevo signup failed", response.status, json);
	} catch (error) {
		console.error(error);
	}

	return "error";
}
