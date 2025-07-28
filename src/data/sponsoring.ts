import { mergeScheduleWithPublic, ScheduleDay } from "./schedule.js";

const badge = "Sponsor Event";

export const sponsorSchedule: ScheduleDay[] = mergeScheduleWithPublic([
	{
		activities: [
			{
				at: "3:00pm",
				description: [
					"Check-in for the hotel is at 3:00pm. Call the hotel well in advance if you'd like to request an early check-in.",
				],
				location: {
					href: "https://www.harborsideinnboston.com",
					text: "Harborside Inn",
				},
				title: "Hotel Check-in",
			},
			{
				at: "7:00pm",
				badge,
				description: [
					"Join us for a dinner with the other speakers and sponsors.",
					"Sponsors on the _Gold_ and _Platinum_ tiers will have had invites previously sent.",
				],
				location: {
					href: "https://joiaboston.com",
					text: "Joia Ristoante & Lounge",
				},
				title: "Speaker & Sponsor Dinner",
			},
		],
		title: "Wednesday, September 17th",
	},
	{
		activities: [
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
			{
				at: "5:00pm",
				badge,
				description: [
					"A private event for speakers and makers in the dev tooling community. Sponsors who purchased the _VIP Builders & Makers Event_ spotlight are invited as well.",
				],
				title: "Ice Cream Social",
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
