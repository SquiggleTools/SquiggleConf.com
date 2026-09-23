export function slugify(title: string) {
	return title
		.toLowerCase()
		.replaceAll(/[^a-z0-9\s-]/g, "")
		.trim()
		.replaceAll(/[\s-]+/g, "-");
}
