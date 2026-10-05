export function pagePathname(url: URL) {
	return url.pathname.replace(/(?:\/index)?\.html$/, "") || "/";
}
