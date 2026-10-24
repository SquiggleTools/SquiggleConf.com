let observer: IntersectionObserver | undefined;

export function pauseOffscreen() {
	observer ??= new IntersectionObserver(
		(entries) => {
			for (const { isIntersecting, target } of entries) {
				target.toggleAttribute("data-offscreen", !isIntersecting);
			}
		},
		{ rootMargin: "200px" },
	);

	for (const element of document.querySelectorAll("[data-pause-offscreen]")) {
		observer.observe(element);
	}
}
