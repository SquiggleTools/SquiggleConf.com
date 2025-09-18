export interface ActivityBetweenData extends ActivityDataWithinBase {
	title: string;
	type: "between";
}

export interface ActivityData {
	at?: string;
	description: string[];
	location?: ActivityLocation;
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

export interface ActivitySessionData extends ActivityDataWithinBase {
	session: string;
	type: "session";
}

export interface ScheduleDay {
	activities: ActivityData[];
	title: string;
}

export const days: ScheduleDay[] = [
	{
		activities: [
			{
				at: "3:00pm - 6:00pm",
				description: [
					"[Artists for Humanity (AFH)](https://www.afhboston.org) is a Boston not-for-profit that employs local teens after school, giving them invaluable art, coding, and design experience.",
					"We'll come over there to help the teens with their coding projects and run mini-workshops on useful development topics.",
					`This event is free and open to any attendee who can code in at least HTML. Sign-ups have closed, so email us if you want to get in last minute. 💙`,
				],
				location: {
					href: "https://www.afhboston.org",
					text: "Artists for Humanity EpiCenter",
				},
				title: "Artists for Humanity Community Service Event",
			},
		],
		title: "Wednesday, October 2nd",
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
				at: "9:40am",
				description: ["Full-length and lightning talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
				within: [
					{
						at: "9:45am",
						title: "Morning Announcements",
						type: "between",
					},
					{
						at: "9:55am",
						session: "talk-robby-russell",
						type: "session",
					},
					{
						at: "10:30am",
						session: "talk-chris-griffing",
						type: "session",
					},
					{
						at: "10:40am",
						session: "talk-rizel-scarlett",
						type: "session",
					},
					{
						at: "11:10am",
						title: "Short Break",
						type: "between",
					},
					{
						at: "11:30am",
						session: "talk-don-isaac",
						type: "session",
					},
					{
						at: "12:00pm",
						session: "talk-titian-cernicova-dragomir",
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
				at: "1:50pm",
				description: ["Full-length and lightning talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
				within: [
					{
						at: "1:50pm",
						title: "Afternoon Announcements",
						type: "between",
					},
					{
						at: "2:00pm",
						session: "talk-laurynas-keturakis",
						type: "session",
					},
					{
						at: "2:10pm",
						session: "talk-aakansha-doshi",
						type: "session",
					},
					{
						at: "2:40pm",
						session: "talk-corina-murg",
						type: "session",
					},
					{
						at: "2:50pm",
						session: "talk-loris-cro",
						type: "session",
					},
					{
						at: "3:20pm",
						title: "Short Break",
						type: "between",
					},
					{
						at: "3:45pm",
						session: "talk-jess-lin",
						type: "session",
					},
					{
						at: "4:15pm",
						session: "talk-yagiz-nizipli",
						type: "session",
					},
				],
			},
			{
				at: "4:30pm",
				description: [
					"What a day! Let's take a breather to have a snack and chat.",
				],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Afternoon Snack",
			},
			{
				at: "5:00pm",
				description: ["Full-length and lightning talks from our speakers."],
				location: {
					href: "https://www.neaq.org/visit/simons-theatre",
					text: "Simons Theater",
				},
				title: "Talks",
				within: [
					{
						at: "5:00pm",
						session: "talk-rick-viscomi",
						type: "session",
					},
					{
						at: "5:30pm",
						session: "talk-rachel-nabors",
						type: "session",
					},
					{
						at: "5:40pm",
						session: "talk-dan-vanderkam",
						type: "session",
					},
				],
			},
			{
				at: "6:15pm",
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
		title: "Thursday, October 3rd",
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
				at: "8:30am",
				description: [
					"Learn actionable day-to-day skills and technological takeaways from some of our partners and sponsors.",
				],
				location: {
					href: "https://faneuilhallmarketplace.com",
					text: "Faneuil Hall - Center Rotunda",
				},
				title: "Morning Workshops",
				within: [
					{
						at: "8:30am",
						session: "workshop-katerina-and-max",
						type: "session",
					},
					{
						at: "10:30am",
						session: "workshop-dan-and-aaron",
						type: "session",
					},
				],
			},
		],
		title: "Friday, October 4th",
	},
];
