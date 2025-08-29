import { mergeScheduleWithPublic, ScheduleDay } from "./schedule.js";

export const publicSchedule: ScheduleDay[] = mergeScheduleWithPublic([
	{
		activities: [
			{
				at: "8:45am",
				description: [
					"Come over to the venue, collect your badge, and network with fellow attendees.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Doors Open",
			},
			{
				at: "9:30am",
				description: ["Full- and medium-length talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
				within: [
					{
						at: "9:45am",
						session: "make-tools-that-people-love",
						type: "session",
					},
					{
						at: "10:20am",
						session: "cross-browser-devtools-with-webextensions",
						type: "session",
					},
					{
						at: "10:40am",
						session: "javascript-framework-cage-match",
						type: "session",
					},
					{
						title: "Short Break",
						type: "between",
					},
					{
						at: "11:30am",
						session: "why-and-how-we-ported-typescript-to-go",
						type: "session",
					},
					{
						at: "12:05pm",
						session: "snapshot-tests-in-gleam-smarter-testing-less work",
						type: "session",
					},
				],
			},
			{
				at: "12:30pm",
				description: [
					"Head over to the nearby Faneuil Hall Marketplace for lunch.",
					"We'll have volunteers available to bring groups to and from popular food establishments.",
				],
				location: {
					href: "https://faneuilhallmarketplace.com",
					text: "Faneuil Hall Marketplace",
				},
				title: "Lunch",
			},
			{
				at: "2:15pm",
				description: ["Full- and medium-length talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
				within: [
					{
						at: "2:25pm",
						session: "quality-code-samples-make-everything-better",
						type: "session",
					},
					{
						at: "3:00pm",
						session: "catch-accessibility-issues-at-the-source-with-storybook",
						type: "session",
					},
				],
			},
			{
				at: "3:20pm",
				description: [
					"What a day! Let's take a breather to have a snack and chat.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Milk and Cookies Break",
			},
			{
				at: "3:40pm",
				description: ["Full- and medium-length talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
				within: [
					{
						at: "3:35pm",
						session: "jsr-designing-package-registry-module-resolution",
						type: "session",
					},
					{
						at: "4:10pm",
						session: "why-we-made-tsdoc-and-how",
						type: "session",
					},
					{
						at: "4:30pm",
						session: "zero-to-squiggle-with-the-language-server-protocol",
						type: "session",
					},
				],
			},
			{
				at: "4:50pm",
				description: [
					"Final pieces of information on upcoming events, raffle giveaways, and appreciation notes to all of the lovely people who attended.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Closing Announcements",
			},
			{
				at: "5:00pm",
				description: [
					"Split up into small groups and race to take pictures of historic Boston landmarks as a team.",
					"We'll provide a list of locations and a map to help you navigate at the end of the closing announcements.",
					"Prizes will include SquiggleConf swag and free tickets to next year's conference.",
				],
				title: "Group Photo Challenge",
			},
		],
		title: "Thursday, September 18th",
	},
	{
		activities: [
			{
				at: "8:45am",
				description: [
					"Come over to the venue, collect your badge, and network with fellow attendees.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Doors Open",
			},
			{
				at: "9:30am",
				description: ["Full- and medium-length talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
				within: [
					{
						at: "9:35am",
						session: "electrons-internal-tooling-open-source-at-scale",
						type: "session",
					},
					{
						at: "10:10am",
						session: "the-lockfiles-phd-you-never-got",
						type: "session",
					},
					{
						at: "10:30am",
						session: "effect-type-safe-errors-and-dependency-injection",
						type: "session",
					},
					{
						title: "Short Break",
						type: "between",
					},
					{
						at: "11:20am",
						session: "rolldown-how-vite-bundles-at-the-speed-of-rust",
						type: "session",
					},
					{
						at: "11:55am",
						session: "a-world-class-local-dev-loop-with-aspire",
						type: "session",
					},
				],
			},
			{
				at: "12:30pm",
				description: [
					"Head over to the nearby Faneuil Hall Marketplace for lunch.",
					"We'll have volunteers available to bring groups to and from popular food establishments.",
				],
				location: {
					href: "https://faneuilhallmarketplace.com",
					text: "Faneuil Hall Marketplace",
				},
				title: "Lunch",
			},
			{
				at: "2:15pm",
				description: ["Full- and medium-length talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
				within: [
					{
						at: "2:05pm",
						session: "source-maps-how-does-the-magic-work",
						type: "session",
					},
					{
						at: "2:40pm",
						session: "aot-compiling-typescript-to-wasm-and-native",
						type: "session",
					},
				],
			},
			{
				at: "3:00pm",
				description: [
					"What a day! Let's take a breather to have a snack and chat.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Milk and Cookies Break",
			},
			{
				at: "3:20pm",
				description: ["Full- and medium-length talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
				within: [
					{
						at: "3:20pm",
						session: "wasi-building-blocks-for-webassembly",
						type: "session",
					},
					{
						at: "3:40pm",
						session: "tech-broke-my-heart",
						type: "session",
					},
				],
			},
			{
				at: "4:15pm",
				description: [
					"Final pieces of information on upcoming events, raffle giveaways, and appreciation notes to all of the lovely people who attended.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Closing Announcements",
			},
		],
		title: "Friday, September 19th",
	},
]);
