import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
	const href = url.searchParams.get("href");
	if (!href) {
		return new Response("Missing 'href' query parameter", { status: 400 });
	}

	const target = new URL(href, url.origin);
	if (target.origin !== url.origin) {
		return new Response("Forbidden", { status: 403 });
	}

	const pathname = target.pathname;
	if (!pathname.startsWith("/_astro/") && !pathname.startsWith("/favicon")) {
		return new Response("Forbidden", { status: 403 });
	}

	return Response.redirect(target.toString(), 302);
};
