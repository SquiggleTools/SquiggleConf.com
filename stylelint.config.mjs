export default {
	extends: ["stylelint-config-standard"],
	ignoreFiles: ["dist/**", "node_modules/**"],
	overrides: [
		{
			customSyntax: "postcss-html",
			files: ["**/*.astro"],
		},
		{
			files: ["src/layouts/base.css", "src/styles/historical.css"],
			rules: {
				"color-named": null,
				"color-no-hex": null,
				"declaration-property-value-disallowed-list": null,
			},
		},
		{
			files: ["src/layouts/breakpoints.css"],
			rules: {
				"at-rule-disallowed-list": null,
				"media-feature-name-disallowed-list": null,
			},
		},
	],
	plugins: ["stylelint-media-use-custom-media"],
	rules: {
		// Breakpoints are only defined in src/layouts/breakpoints.css
		"at-rule-disallowed-list": ["custom-media"],
		"csstools/media-use-custom-media": [
			"known",
			{ importFrom: ["src/layouts/breakpoints.css"] },
		],
		"media-feature-name-disallowed-list": [
			"/^(min-|max-)?(device-)?(width|height|aspect-ratio)$/",
		],
		"media-feature-range-notation": "context",

		// Colors come from design tokens in src/layouts/base.css
		"color-named": "never",
		"color-no-hex": true,
		"declaration-property-value-disallowed-list": {
			"/.*/": [
				"/\\b(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\\((?!\\s*from\\b)/i",
			],
		},

		// Global tokens are camelCase; component-scoped properties are kebab-case
		"custom-media-pattern": "^[a-z][a-zA-Z0-9]*$",
		"custom-property-pattern": "^([a-z][a-zA-Z0-9]*|[a-z0-9]+(-[a-z0-9]+)*)$",

		// Astro's :global() and html.dark overrides make this too noisy
		"no-descending-specificity": null,
		"selector-pseudo-class-no-unknown": [
			true,
			{ ignorePseudoClasses: ["global"] },
		],
	},
};
