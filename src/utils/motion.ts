const reducedMotionMediaQuery = matchMedia("(prefers-reduced-motion: reduce)");

export const motionChangeEvent = "motion-change";

export function getMotionPaused() {
	return document.documentElement.classList.contains("motion-paused");
}

export function setMotionPaused(paused: boolean) {
	document.documentElement.classList.toggle("motion-paused", paused);
	try {
		if (paused) {
			localStorage.setItem("motion", "paused");
		} else {
			localStorage.removeItem("motion");
		}
	} catch (error) {
		console.warn("Could not save the motion preference.", error);
	}
	document.dispatchEvent(new CustomEvent(motionChangeEvent));
}

export const reducedMotionQuery = {
	addEventListener(type: "change", listener: () => void) {
		reducedMotionMediaQuery.addEventListener(type, listener);
		document.addEventListener(motionChangeEvent, listener);
	},
	get matches() {
		return reducedMotionMediaQuery.matches || getMotionPaused();
	},
};
