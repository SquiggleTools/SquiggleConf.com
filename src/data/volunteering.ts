import { mergeScheduleWithPublic, ScheduleDay } from "./schedule.js";

const badge = "Private Activity";

export const volunteeringSchedule: ScheduleDay[] = mergeScheduleWithPublic([
	{
		activities: [
			{
				at: "8:00am",
				badge,
				description: [
					"Meet the staff behind SquiggleConf and your fellow volunteers.",
					"We'll go over the schedule, assorted roles, and answer any questions you have.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Volunteer Training",
			},
			{
				at: "8:45am",
				description: [
					"Doors open at 8:45am and the conference extends through 5:00pm.",
					"See [Schedule > Thursday, September 18th](/2025/schedule#thursday) for more details.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Day 1",
			},
		],
		title: "Thursday, September 18th",
	},
	{
		activities: [
			{
				at: "8:45am",
				description: [
					"Doors open at 8:45am and the conference extends through 4:30pm.",
					"See [Schedule > Friday, September 19th](/2025/schedule#friday) for more details.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Day 2",
			},
		],
		title: "Friday, September 19th",
	},
]);
