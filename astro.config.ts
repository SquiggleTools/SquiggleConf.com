import cloudflare from "@astrojs/cloudflare";
import { konamiEmojiBlast } from "@konami-emoji-blast/astro";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
	adapter: cloudflare({
		imageService: "passthrough",
	}),
	env: {
		schema: {
			BREVO_API_KEY: envField.string({
				access: "secret",
				context: "server",
				optional: true,
			}),
			BREVO_LIST_ID: envField.number({
				access: "public",
				context: "server",
				optional: true,
			}),
		},
	},
	image: {
		endpoint: {
			entrypoint: "src/pages/_image.ts",
			route: "/_image",
		},
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [konamiEmojiBlast()],
	output: "server",
	session: {
		driver: "memory",
	},
	redirects: {
		"/2024/about": "/about",
		"/2024/code-of-conduct": "/code-of-conduct",
		"/2024/faqs": "/faqs",
		"/2024/travel": "/travel",
		"/faqs": "/articles/faqs",
		"/how-to-attend-squiggleconf-for-free":
			"/articles/how-to-attend-squiggleconf-for-free",
		"/schedule": "/2025/schedule",
		"/sessions": "/2025/sessions",
		"/speakers": "/2025/speakers",
		"/travel": "/articles/travel",
	},
	site: "https://squiggleconf.com",
});
