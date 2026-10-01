export function observeAboveMiddle(
	targets: Iterable<Element>,
	onChange: (target: Element, above: boolean) => void,
	threshold = 0,
) {
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				onChange(entry.target, entry.isIntersecting);
			}
		},
		{ rootMargin: "100000px 0px -50% 0px", threshold },
	);

	for (const target of targets) {
		observer.observe(target);
	}
}
