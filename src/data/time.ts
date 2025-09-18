import { Temporal } from "temporal-polyfill";

export function parseTimeToNumber(timeStr: string) {
	const firstTimeMentioned = timeStr.split(" ")[0];
	const match = /^(\d{1,2}):(\d{2})(am|pm)$/i.exec(firstTimeMentioned);
	if (!match) {
		return Temporal.PlainTime.from({ hour: 0, minute: 0 });
	}

	const [, hourRaw, minuteRaw, period] = match;
	let hour = parseInt(hourRaw, 10);
	const minute = parseInt(minuteRaw, 10);

	if (period.toLowerCase() === "pm" && hour !== 12) {
		hour += 12;
	} else if (period.toLowerCase() === "am" && hour === 12) {
		hour = 0;
	}

	return Temporal.PlainTime.from({ hour, minute });
}
