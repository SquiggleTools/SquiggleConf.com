import { reducedMotionQuery } from "./motion";

const autoAdvanceInterval = 3400;

interface AutoAdvanceOptions {
	advance: () => void;
	carousel: HTMLElement;
	slideCount: number;
	track: HTMLElement;
}

export function startAutoAdvance({
	advance,
	carousel,
	slideCount,
	track,
}: AutoAdvanceOptions) {
	const pause = carousel.querySelector<HTMLButtonElement>(
		"[data-carousel-pause]",
	);
	let hovered = false;
	let paused = false;
	let timer: number | undefined;
	let visible = false;

	const update = () => {
		window.clearInterval(timer);
		const available = !reducedMotionQuery.matches && slideCount > 1;
		if (pause) {
			if (!available && document.activeElement === pause) {
				track.focus();
			}
			pause.hidden = !available;
		}

		const rotating = available && visible && !hovered && !paused;
		track.setAttribute("aria-live", rotating ? "off" : "polite");
		if (rotating) {
			timer = window.setInterval(advance, autoAdvanceInterval);
		}
	};

	const setPaused = (value: boolean) => {
		paused = value;
		pause?.toggleAttribute("data-paused", paused);
		pause?.setAttribute(
			"aria-label",
			paused ? "Play slideshow" : "Pause slideshow",
		);
		update();
	};

	pause?.addEventListener("click", () => {
		if (paused) {
			hovered = false;
		}
		setPaused(!paused);
	});

	carousel.addEventListener("pointerenter", () => {
		hovered = true;
		update();
	});
	carousel.addEventListener("pointerleave", () => {
		hovered = false;
		update();
	});
	carousel.addEventListener("focusin", (event) => {
		if (
			!paused &&
			event.target instanceof Element &&
			event.target.matches(":focus-visible")
		) {
			setPaused(true);
		}
	});

	new IntersectionObserver((entries) => {
		visible = !!entries.at(-1)?.isIntersecting;
		update();
	}).observe(carousel);

	reducedMotionQuery.addEventListener("change", update);

	return update;
}
