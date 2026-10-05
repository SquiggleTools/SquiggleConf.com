import { historicalDataByYear } from "./historical/data";

export const currentYear = 2027;

export const years = [
	...Object.keys(historicalDataByYear).map(Number),
	currentYear,
];
