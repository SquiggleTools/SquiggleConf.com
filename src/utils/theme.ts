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

export const themeTransitionDuration = 2500;

let themeTransitionEnd: ReturnType<typeof setTimeout> | undefined;

export function changeTheme(theme: Theme = getOppositeTheme()) {
	if (!reducedMotionQuery.matches) {
		const html = document.documentElement;
		html.classList.add("theme-transition");
		clearTimeout(themeTransitionEnd);
		themeTransitionEnd = setTimeout(() => {
			html.classList.remove("theme-transition");
		}, themeTransitionDuration);
	}

	setTheme(theme);
}
