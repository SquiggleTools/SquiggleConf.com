import { themeChangeEvent } from "~/utils/theme";

const containers = new Set<HTMLElement>();
const crescentOffset = 1;

let resizeObserver: ResizeObserver | undefined;
let tracking = false;

export function aimLightRays(container: HTMLElement) {
	if (!resizeObserver) {
		resizeObserver = new ResizeObserver(aim);
		resizeObserver.observe(document.documentElement);
		document.addEventListener(themeChangeEvent, track);
	}

	containers.add(container);
	resizeObserver.observe(container);
}

function aim() {
	const target = findTarget();
	const rays = [...containers].flatMap((container) => {
		if (!container.getClientRects().length) {
			return [];
		}

		const box = container.getBoundingClientRect();
		return [...container.children].map((ray) => {
			if (!(ray instanceof HTMLElement) || !target) {
				return { ray };
			}

			const [originX = 0, originY = 0] = getComputedStyle(ray)
				.transformOrigin.split(" ")
				.map(parseFloat);
			const x = box.left + ray.offsetLeft + originX;
			const y = box.top + ray.offsetTop + originY;

			return { angle: Math.atan2(target.x - x, y - target.y), ray };
		});
	});

	for (const { angle, ray } of rays) {
		if (!(ray instanceof HTMLElement)) {
			continue;
		}

		if (angle === undefined) {
			ray.style.removeProperty("--aim");
		} else {
			ray.style.setProperty("--aim", `${angle.toString()}rad`);
		}
	}

	for (const container of containers) {
		container.toggleAttribute("data-aimed", true);
	}
}

function findTarget() {
	let brightest: undefined | { opacity: number; orb: HTMLElement };

	for (const orb of document.querySelectorAll<HTMLElement>(".hero-sky-orb")) {
		const opacity = Number(getComputedStyle(orb).opacity);
		if (orb.getClientRects().length && opacity > (brightest?.opacity ?? -1)) {
			brightest = { opacity, orb };
		}
	}

	if (!brightest) {
		return undefined;
	}

	const { orb } = brightest;
	const box = orb.getBoundingClientRect();
	const darkness = orb.classList.contains("theme-pin-dark")
		? 1
		: orb.classList.contains("theme-pin-light")
			? 0
			: Number(getComputedStyle(orb).getPropertyValue("--themeDark"));
	const offset =
		darkness *
		crescentOffset *
		parseFloat(getComputedStyle(document.documentElement).fontSize);

	return {
		x: box.left + box.width / 2 + offset,
		y: box.top + box.height / 2 - offset,
	};
}

function track() {
	if (tracking) {
		return;
	}

	tracking = true;

	const tick = () => {
		aim();

		const { classList } = document.documentElement;
		if (
			classList.contains("hero-orb-travel") ||
			classList.contains("theme-transition")
		) {
			requestAnimationFrame(tick);
		} else {
			tracking = false;
		}
	};

	requestAnimationFrame(tick);
}
