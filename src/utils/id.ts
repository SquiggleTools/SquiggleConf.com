export function slugify(title: string) {
	return title.toLowerCase().replaceAll(" ", "-");
}
