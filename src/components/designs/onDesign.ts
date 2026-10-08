export function onDesign(id: number, enter: (() => () => void) | (() => void)) {
	let cleanup: (() => void) | undefined;

	const update = () => {
		const active = document.documentElement.dataset.design === String(id);

		if (active && !cleanup) {
			const result = enter();
			cleanup = typeof result === "function" ? result : () => undefined;
		} else if (!active && cleanup) {
			cleanup();
			cleanup = undefined;
		}
	};

	update();
	window.addEventListener("design-change", update);
}
