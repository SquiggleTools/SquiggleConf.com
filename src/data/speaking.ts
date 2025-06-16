import { mergeScheduleWithPublic, ScheduleDay } from "./schedule.js";

const badge = "Speaker Activity";

export const speakerSchedule: ScheduleDay[] = mergeScheduleWithPublic([
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
					"This is a great opportunity to meet your fellow speakers and sponsors, and to get to know each other before the conference.",
				],
				location: {
					href: "https://joiaboston.com",
					text: "Joia Restaurant & Lounge",
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
					"See [Schedule > Thursday, September 18th](/2024/schedule#thursday) for more details.",
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
					"A private event for speakers, sponsors, and makers in the dev tooling community.",
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
					"Doors open at 8:45am and the conference extends through 5:00pm.",
					"See [Schedule > Friday, September 19th](/2024/schedule#friday) for more details.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Day 2",
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
	{
		activities: [
			{
				at: "Morning",
				description: [
					"If you're staying at the hotel, you'll need to check out before the speaker event.",
					"The front desk will be able to hold your luggage for the day.",
				],
				location: {
					href: "https://www.harborsideinnboston.com",
					text: "Harborside Inn",
				},
				title: "Hotel Checkout",
			},
			{
				at: "10:00am",
				badge,
				description: [
					"Speakers and organizers will go on a fun private Boston-themed event together.",
				],
				title: "Speaker Event",
			},
		],
		title: "Saturday, September 20th",
	},
]);
