import { marked, Renderer, type Tokens } from "marked";

marked.use({
	renderer: {
		link(token: Tokens.Link) {
			const html = Renderer.prototype.link.call(this as Renderer, token);
			return /^https?:/.test(token.href)
				? html.replace("<a ", '<a rel="noreferrer" target="_blank" ')
				: html;
		},
	},
});

export function renderMarkdown(markdown: string) {
	return marked.parse(markdown, { async: false });
}

export function renderMarkdownInline(markdown: string) {
	return marked.parseInline(markdown, { async: false });
}
