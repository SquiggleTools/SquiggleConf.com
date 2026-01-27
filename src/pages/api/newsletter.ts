import { APIRoute } from "astro";
import { BREVO_API_KEY, BREVO_LIST_ID } from "astro:env/server";
import { z } from "zod";

const bodySchema = z.object({
	email: z.email(),
});

export const POST: APIRoute = async ({ request }) => {
	const body = bodySchema.safeParse(await request.json());
	if (body.error) {
		return new Response("Invalid body", {
			status: 400,
			statusText: body.error.message,
		});
	}

	const { email } = body.data;

	try {
		const response = await fetch("https://api.brevo.com/v3/contacts", {
			body: JSON.stringify({
				email,
				listIds: [BREVO_LIST_ID],
			}),
			headers: {
				"api-key": BREVO_API_KEY,
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		if (response.ok || isBrevoDuplicateIdentifier(await response.json())) {
			return new Response("Thanks for subscribing!", { status: 200 });
		}

		console.error(response);
		return new Response("Error", { status: 400 });
	} catch (error) {
		console.error(error);
		return new Response("Error", { status: 400 });
	}
};

function isBrevoDuplicateIdentifier(json: unknown) {
	return (
		typeof json === "object" &&
		!!json &&
		"code" in json &&
		json.code === "duplicate_parameter"
	);
}
