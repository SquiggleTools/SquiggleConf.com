export type Theme = "dark" | "light";

export const themeChangeEvent = "theme-change";

export function getOppositeTheme(): Theme {
	return getTheme() === "dark" ? "light" : "dark";
}

export function getTheme(): Theme {
	return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function setTheme(theme: Theme) {
	document.documentElement.classList.toggle("dark", theme === "dark");
	localStorage.setItem("theme", theme);
	document.dispatchEvent(new CustomEvent(themeChangeEvent));
}
