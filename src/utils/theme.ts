import { reducedMotionQuery } from "./motion";

export type Theme = "dark" | "light";

export const themeChangeEvent = "theme-change";

export function getOppositeTheme(): Theme {
	return getTheme() === "dark" ? "light" : "dark";
}

export function getTheme(): Theme {
	return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function setTheme(theme: Theme) {
	document.documentElement.classList.toggle("dark", theme === "dark");
	try {
		localStorage.setItem("theme", theme);
	} catch (error) {
		console.warn("Could not save the theme preference.", error);
	}
	document.dispatchEvent(new CustomEvent(themeChangeEvent));
}

export const themeTransitionDuration = 1650;

let themeTransitionEnd: ReturnType<typeof setTimeout> | undefined;

let restoreOffscreenRendering: (() => void) | undefined;

export function changeTheme(theme: Theme = getOppositeTheme()) {
	if (!reducedMotionQuery.matches) {
		const html = document.documentElement;
		restoreOffscreenRendering?.();
		restoreOffscreenRendering = skipOffscreenRendering();
		html.classList.add("theme-transition");
		clearTimeout(themeTransitionEnd);
		themeTransitionEnd = setTimeout(() => {
			html.classList.remove("theme-transition");
			restoreOffscreenRendering?.();
			restoreOffscreenRendering = undefined;
		}, themeTransitionDuration);
	}

	setTheme(theme);
}

function skipOffscreenRendering() {
	const offscreen = [
		...document.querySelectorAll<HTMLElement>("[data-theme-lazy] > *"),
	].flatMap((element) => {
		const { bottom, height, top, width } = element.getBoundingClientRect();
		if (!height || (bottom >= 0 && top <= innerHeight)) {
			return [];
		}

		const style = getComputedStyle(element);
		const inset = (...properties: string[]) =>
			properties.reduce(
				(total, property) =>
					total + parseFloat(style.getPropertyValue(property)),
				0,
			);

		return [
			{
				contentHeight:
					height -
					inset(
						"border-top-width",
						"border-bottom-width",
						"padding-top",
						"padding-bottom",
					),
				contentWidth:
					width -
					inset(
						"border-left-width",
						"border-right-width",
						"padding-left",
						"padding-right",
					),
				element,
				height,
			},
		];
	});

	for (const { contentHeight, contentWidth, element } of offscreen) {
		element.style.containIntrinsicSize = `${contentWidth.toString()}px ${contentHeight.toString()}px`;
		element.style.contentVisibility = "auto";
	}

	const unstable = offscreen.filter(
		({ element, height }) =>
			Math.abs(element.getBoundingClientRect().height - height) > 0.5,
	);

	const restore = (elements: typeof offscreen) => {
		for (const { element } of elements) {
			element.style.removeProperty("contain-intrinsic-size");
			element.style.removeProperty("content-visibility");
		}
	};

	restore(unstable);

	return () => {
		restore(offscreen);
	};
}
