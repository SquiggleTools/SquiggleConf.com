import type { ImageMetadata } from "astro";

export function getCoverImageProps(
	image: ImageMetadata,
	size: number,
	scale = 1,
	columnWidth?: number,
) {
	const width = Math.ceil(
		size * Math.max(1, image.width / image.height) * scale,
	);
	const densities = columnWidth ? [0.5, 1, 2, 3] : [1, 2, 3];

	return {
		sizes: columnWidth
			? `min(${width.toString()}px, calc((100vw - 3rem) * ${(width / columnWidth).toFixed(3)}))`
			: `${width.toString()}px`,
		widths: densities.map((density) => Math.ceil(width * density)),
	};
}
