import type { ImageMetadata } from "astro";

export function getCoverImageProps(
	image: ImageMetadata,
	size: number,
	scale = 1,
) {
	const width = Math.ceil(
		size * Math.max(1, image.width / image.height) * scale,
	);

	return {
		sizes: `${width.toString()}px`,
		widths: [1, 2, 3].map((density) => width * density),
	};
}
