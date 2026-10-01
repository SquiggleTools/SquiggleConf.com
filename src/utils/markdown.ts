import { marked } from "marked";

marked.use({
	hooks: {
		postprocess(html) {
			return html.replaceAll(
				/<a href="(https?:[^"]*)"/g,
				'<a href="$1" rel="noreferrer" target="_blank"',
			);
		},
	},
});

export function renderMarkdown(markdown: string) {
	return marked.parse(markdown, { async: false });
}

export function renderMarkdownInline(markdown: string) {
	return marked.parseInline(markdown, { async: false });
}
