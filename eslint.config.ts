import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslint from "@eslint/js";
import markdown from "@eslint/markdown";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import n from "eslint-plugin-n";
import packageJson from "eslint-plugin-package-json";
import perfectionist from "eslint-plugin-perfectionist";
import * as regexp from "eslint-plugin-regexp";
import yml from "eslint-plugin-yml";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
	globalIgnores([
		".astro",
		".vercel",
		"dist",
		"node_modules",
		"pnpm-lock.yaml",
		"src/env.d.ts",
	]),
	{
		linterOptions: {
			reportUnusedDisableDirectives: "error",
		},
	},
	{
		extends: [jsonc.configs["flat/recommended-with-json"]],
		files: ["**/*.json"],
	},
	{
		extends: [markdown.configs.recommended],
		files: ["**/*.md"],
		rules: {
			// https://github.com/eslint/markdown/issues/294
			"markdown/no-missing-label-refs": "off",
		},
	},
	{
		extends: [packageJson.configs.recommended],
		files: ["package.json"],
	},
	{
		extends: [
			comments.recommended,
			eslint.configs.recommended,
			n.configs["flat/recommended"],
			jsdoc.configs["flat/contents-typescript-error"],
			jsdoc.configs["flat/logical-typescript-error"],
			jsdoc.configs["flat/stylistic-typescript-error"],
			tseslint.configs.strictTypeChecked,
			tseslint.configs.stylisticTypeChecked,
			perfectionist.configs["recommended-natural"],
			regexp.configs["flat/recommended"],
		],
		files: ["**/*.{js,ts}"],
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ["*.config.*s"],
				},
			},
		},
		rules: {
			"n/no-missing-import": "off",
			"n/no-unpublished-import": "off",

			// Stylistic concerns that don't interfere with Prettier
			"logical-assignment-operators": [
				"error",
				"always",
				{ enforceForIfStatements: true },
			],
			"no-useless-rename": "error",
			"object-shorthand": "error",
			"operator-assignment": "error",
		},
		settings: { perfectionist: { partitionByComment: true, type: "natural" } },
	},
	{
		extends: [yml.configs["flat/recommended"], yml.configs["flat/prettier"]],
		files: ["**/*.{yml,yaml}"],
		rules: {
			"yml/file-extension": "error",
			"yml/sort-keys": [
				"error",
				{ order: { type: "asc" }, pathPattern: "^.*$" },
			],
			"yml/sort-sequence-values": [
				"error",
				{ order: { type: "asc" }, pathPattern: "^.*$" },
			],
		},
	},
);
