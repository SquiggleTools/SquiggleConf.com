import { APIRoute } from "astro";
import { BREVO_API_KEY, BREVO_LIST_ID } from "astro:env/server";
import { z } from "zod";

const bodySchema = z.object({
	email: z.email(),
});

export const POST: APIRoute = async ({ request }) => {
	if (!BREVO_API_KEY || BREVO_LIST_ID === undefined) {
		return new Response("Newsletter signup is unavailable", {
			status: 503,
		});
	}

	const formData = Object.fromEntries(await request.formData());
	const body = bodySchema.safeParse(formData);
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

		console.log(response);

		return response.ok || isBrevoDuplicateIdentifier(await response.json())
			? new Response("Thanks for signing up!", { status: 200 })
			: new Response("Error", { status: 400 });
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
