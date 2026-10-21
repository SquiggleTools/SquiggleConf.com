import type { FontProvider } from "astro";

import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { konamiEmojiBlast } from "@konami-emoji-blast/astro";
import { defineConfig, envField } from "astro/config";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const fontsource: FontProvider = {
	name: "fontsource-files",
	async resolveFont({ familyName, styles, subsets, weights }) {
		const id = familyName
			.replace(/ Variable$/, "")
			.toLowerCase()
			.replaceAll(" ", "-");
		const directory = `${familyName.endsWith(" Variable") ? "@fontsource-variable" : "@fontsource"}/${id}`;
		const unicodeRanges = JSON.parse(
			await readFile(require.resolve(`${directory}/unicode.json`), "utf8"),
		) as Record<string, string>;

		return {
			fonts: subsets.flatMap((subset) =>
				styles.flatMap((style) =>
					weights.map((weight) => ({
						meta: { subset },
						src: [
							{
								url: require.resolve(
									`${directory}/files/${id}-${subset}-${weight.includes(" ") ? "wght" : weight}-${style}.woff2`,
								),
							},
						],
						style,
						unicodeRange: unicodeRanges[subset].split(","),
						weight,
					})),
				),
			),
		};
	},
};

export default defineConfig({
	adapter: cloudflare({
		imageService: "compile",
	}),
	build: {
		format: "file",
	},
	compressHTML: true,
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
				default: 3,
			}),
		},
	},
	fonts: [
		{
			cssVariable: "--fontFamilyBody",
			fallbacks: ["Inter Variable Fallback", "sans-serif"],
			name: "Inter Variable",
			optimizedFallbacks: false,
			provider: fontsource,
			styles: ["normal"],
			subsets: ["latin", "latin-ext"],
			weights: ["100 900"],
		},
		{
			cssVariable: "--fontFamilyHeading",
			fallbacks: ["Urbanist Variable Fallback", "sans-serif"],
			name: "Urbanist Variable",
			optimizedFallbacks: false,
			provider: fontsource,
			styles: ["normal", "italic"],
			subsets: ["latin", "latin-ext"],
			weights: ["100 900"],
		},
		{
			cssVariable: "--fontFamilyLogo",
			fallbacks: ["Josefin Sans Variable Fallback", "sans-serif"],
			name: "Josefin Sans Variable",
			optimizedFallbacks: false,
			provider: fontsource,
			styles: ["normal"],
			subsets: ["latin", "latin-ext"],
			weights: ["100 700"],
		},
		{
			cssVariable: "--fontFamilyMonospace",
			fallbacks: ["monospace"],
			name: "Geist Mono",
			optimizedFallbacks: false,
			provider: fontsource,
			styles: ["normal"],
			subsets: ["latin", "latin-ext"],
			weights: [400],
		},
	],
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		konamiEmojiBlast(),
		sitemap({ filter: (page) => !page.endsWith("/404") }),
	],
	output: "static",
	redirects: {
		"/2024/about": "/",
		"/2024/code-of-conduct": "/code-of-conduct",
		"/2024/faqs": "/articles/faqs",
		"/2024/schedule": "/2024/sessions",
		"/2024/travel": "/articles/travel",
		"/2025/schedule": "/2025/sessions",
		"/about": "/",
		"/faqs": "/articles/faqs",
		"/qr": { destination: "/", status: 302 },
		"/schedule": { destination: "/", status: 302 },
		"/sessions": { destination: "/2025/sessions", status: 302 },
		"/speakers": { destination: "/2025/speakers", status: 302 },
		"/travel": "/articles/travel",
	},
	session: false,
	site: "https://squiggleconf.com",
	vite: {
		build: {
			assetsInlineLimit: (filePath, content) =>
				filePath.endsWith(".css") ? content.length < 20_000 : undefined,
		},
	},
});
