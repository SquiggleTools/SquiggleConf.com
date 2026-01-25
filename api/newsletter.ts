import { z } from "zod";

const envSchema = z
	.object({
		BREVO_API_KEY: z.string().min(1),
		BREVO_LIST_ID: z.coerce.number().int().positive().optional(),
	})
	.transform((data) => ({
		brevoApiKey: data.BREVO_API_KEY,
		brevoListId: data.BREVO_LIST_ID,
	}));

const env = envSchema.parse(process.env);

export default async function handler(req: any, res: any) {
	if (req.method !== "POST") {
		return res.status(405).end();
	}

	const raw: string = await new Promise((resolve) => {
		let data = "";
		req.on("data", (chunk: any) => (data += chunk));
		req.on("end", () => resolve(data));
	});
	const params = new URLSearchParams(raw);
	const email = params.get("email")?.trim() || "";

	if (!email) {
		return res.status(400).json({ error: "Missing email" });
	}

	const payload: Record<string, unknown> = { email };
	if (env.brevoListId) {
		payload.listIds = [env.brevoListId];
	}

	try {
		const response = await fetch(
			"https://api.brevo.com/v3/contacts?updateEnabled=true",
			{
				body: JSON.stringify(payload),
				headers: {
					"api-key": env.brevoApiKey,
					"Content-Type": "application/json",
				},
				method: "POST",
			},
		);

		if (!response.ok) {
			return res.status(response.status).json({ error: response.statusText });
		}

		const data = await response.json();
		return res.status(201).json(data || { message: "created" });
	} catch (error: unknown) {
		return res.status(500).json({
			error: error instanceof Error ? error.message : "Unknown error",
		});
	}
}
