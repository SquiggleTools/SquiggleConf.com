import { Temporal } from "temporal-polyfill";

import { parseTimeToNumber } from "./time.js";

export interface ActivityBetweenData extends ActivityDataWithinBase {
	title: string;
	type: "between";
}

export interface ActivityData {
	at: string;
	badge?: string;
	description: string[];
	location?: ActivityLocation;
	privacy?: Partial<Record<ActivityPrivacy, boolean>>;
	title: string;
	within?: ActivityDataWithin[];
}

export type ActivityDataWithin = ActivityBetweenData | ActivitySessionData;

export interface ActivityDataWithinBase {
	at: string;
}

export interface ActivityLocation {
	href: string;
	text: string;
}

export type ActivityPrivacy = "speakers" | "sponsors";

export interface ActivitySessionData extends ActivityDataWithinBase {
	session: string;
	type: "session";
}

export interface ScheduleDay {
	activities: ActivityData[];
	title: string;
}

export const sharedSchedule: ScheduleDay[] = [
	{
		activities: [
			{
				at: "4:00pm",
				description: [
					"We will arrange a community service event with a local non-profit the afternoon before the conference.",
					`This event will free and open to any attendee who can code in at least HTML.`,
				],
				title: "Community Service Event",
			},
		],
		title: "Wednesday, September 17th",
	},
	{
		activities: [
			{
				at: "7:00am",
				description: [
					"Join organizers, volunteers, and attendees for a free joyful jog around the Boston harbor.",
					"We'll meet at the New England Aquarium and run in a 5k loop at a comfortably light pace.",
				],
				location: {
					href: "https://www.neaq.org/visit",
					text: "New England Aquarium",
				},
				title: "Morning Fun Run",
			},
			{
				// todo: switch to string[] for less prominent &
				at: "6:00pm & 7:00pm",
				description: [
					"We'll arrange suggested dinner and casual social gathering locations for attendees, speakers, and sponsors.",
				],
				title: "Suggested Dinner Locations",
			},
		],
		title: "Thursday, September 18th",
	},
	{
		activities: [
			{
				at: "7:00am",
				description: [
					"Join organizers, volunteers, and attendees for a free joyful jog around the Boston harbor.",
					"We'll meet at the New England Aquarium and run in a 5k loop at a comfortably light pace.",
				],
				location: {
					href: "https://www.neaq.org/visit",
					text: "New England Aquarium",
				},
				title: "Morning Fun Run",
			},
			{
				at: "6:00pm",
				description: [
					"We'll arrange suggested dinner and casual social gathering locations for attendees.",
				],
				title: "Suggested Dinner Spots",
			},
			{
				at: "7:30pm",
				description: [
					"After dinner, bring your badge for entry and hang out with the organizers, speakers, and fellow attendees in our mixer.",
					"Expect locally prepared hors d'œuvres and a craft lemonade stand.",
				],
				location: {
					href: "https://www.howlatthemoon.com/boston",
					text: "Howl at the Moon Boston",
				},
				title: "Post-Conference Hangout",
			},
		],
		title: "Friday, September 19th",
	},
];

export function mergeScheduleWithPublic(
	schedule: ScheduleDay[],
): ScheduleDay[] {
	return mergeSchedules(sharedSchedule, schedule);
}

function mergeActivities(existing: ActivityData[], added: ActivityData[]) {
	return [...existing, ...added].sort((a, b) =>
		Temporal.PlainTime.compare(
			parseTimeToNumber(a.at),
			parseTimeToNumber(b.at),
		),
	);
}

function mergeSchedules(...schedules: ScheduleDay[][]): ScheduleDay[] {
	const merged = schedules.reduce<ScheduleDay[]>((accumulator, schedule) => {
		schedule.forEach((day) => {
			const existingDay = accumulator.find(
				(existingDay) => existingDay.title === day.title,
			);

			if (!existingDay) {
				accumulator = [...accumulator, day];
				return;
			}

			accumulator = accumulator.map((existingDay) =>
				existingDay.title === day.title
					? {
							...existingDay,
							activities: mergeActivities(
								existingDay.activities,
								day.activities,
							),
						}
					: existingDay,
			);
		});

		return accumulator;
	}, []);

	return merged;
}
