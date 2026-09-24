/**
 * Runs a callback now and at most once per animation frame whenever the page
 * scrolls, resizes, or any of the given media queries change.
 */
export function onScrollFrame(
	callback: () => void,
	...queries: MediaQueryList[]
) {
	let requested = false;

	const request = () => {
		if (!requested) {
			requested = true;
			requestAnimationFrame(() => {
				requested = false;
				callback();
			});
		}
	};

	request();
	addEventListener("scroll", request, { passive: true });
	addEventListener("resize", request);
	for (const query of queries) {
		query.addEventListener("change", request);
	}
}
