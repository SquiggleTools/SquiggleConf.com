import type { APIRoute } from "astro";

import { BREVO_API_KEY, BREVO_LIST_ID } from "astro:env/server";
import { z } from "zod";

export const prerender = false;

const bodySchema = z.object({
	email: z.email(),
});

export const POST: APIRoute = async ({ request }) => {
	if (!BREVO_API_KEY) {
		return new Response("Newsletter signup is unavailable", {
			status: 503,
		});
	}

	const body = bodySchema.safeParse(
		Object.fromEntries(await request.formData().catch(() => [])),
	);
	if (body.error) {
		return new Response("Please enter a valid email address.", {
			status: 400,
		});
	}

	const { email } = body.data;

	try {
		const response = await fetch("https://api.brevo.com/v3/contacts", {
			body: JSON.stringify({
				email,
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
			return new Response("Thanks for signing up!", { status: 200 });
		}

		const json: unknown = await response.json().catch(() => undefined);
		if (isBrevoDuplicateIdentifier(json)) {
			return new Response("Thanks for signing up!", { status: 200 });
		}

		console.error("Brevo signup failed", response.status, json);
	} catch (error) {
		console.error(error);
	}

	return new Response(
		"We couldn't sign you up right now. Please try again later.",
		{ status: 502 },
	);
};

function isBrevoDuplicateIdentifier(json: unknown) {
	return (
		typeof json === "object" &&
		!!json &&
		"code" in json &&
		json.code === "duplicate_parameter"
	);
}
