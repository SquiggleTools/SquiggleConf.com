import vercel from "@astrojs/vercel";
import { konamiEmojiBlast } from "@konami-emoji-blast/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	experimental: {
		responsiveImages: true,
	},
	integrations: [konamiEmojiBlast()],
	output: "server",
	redirects: {
		"/2024/about": "/about",
		"/2024/code-of-conduct": "/code-of-conduct",
		"/2024/faqs": "/faqs",
		"/2024/travel": "/travel",
		"/2025": "/",
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
