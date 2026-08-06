import * as data2024 from "./2024";
import * as data2025 from "./2025";
import { HistoricalDataForYear } from "./types";

export const historicalDataByYear = {
	2024: {
		date: "October 3-4, 2024",
		peopleBySlug: data2024.peopleBySlug,
		sessionsBySlug: data2024.talksBySlug,
	},
	2025: {
		date: "September 18-19, 2025",
		peopleBySlug: data2025.peopleBySlug,
		sessionsBySlug: data2025.sessionsBySlug,
	},
} satisfies Record<string, HistoricalDataForYear>;

export function getStaticPathsHistorical() {
	return Object.keys(historicalDataByYear).map((key) => ({
		params: { year: +key },
	}));
}
