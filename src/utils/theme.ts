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

let unpinOffscreenThemes: (() => void) | undefined;

export function changeTheme(theme: Theme = getOppositeTheme()) {
	if (!reducedMotionQuery.matches) {
		const html = document.documentElement;
		unpinOffscreenThemes?.();
		unpinOffscreenThemes = pinOffscreenThemes();
		html.classList.add("theme-transition");
		clearTimeout(themeTransitionEnd);
		themeTransitionEnd = setTimeout(() => {
			html.classList.remove("theme-transition");
			unpinOffscreenThemes?.();
			unpinOffscreenThemes = undefined;
		}, themeTransitionDuration);
	}

	setTheme(theme);
}

function pinOffscreenThemes() {
	const margin = innerHeight / 2;
	const isOffscreen = (element: Element) => {
		const { bottom, height, top } = element.getBoundingClientRect();
		return height > 0 && (bottom < -margin || top > innerHeight + margin);
	};
	const unpin = (element: Element) => {
		element.removeAttribute("data-theme-pinned");
	};

	let pinned = [
		...document.querySelectorAll<HTMLElement>("[data-theme-lazy] > *"),
	].filter(isOffscreen);

	const unpinOnscreen = () => {
		const onscreen = pinned.filter((element) => !isOffscreen(element));
		pinned = pinned.filter((element) => !onscreen.includes(element));
		onscreen.forEach(unpin);
	};

	for (const element of pinned) {
		element.setAttribute("data-theme-pinned", "");
	}

	addEventListener("scroll", unpinOnscreen, { passive: true });

	return () => {
		removeEventListener("scroll", unpinOnscreen);
		pinned.forEach(unpin);
	};
}
