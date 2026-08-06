export interface HistoricalDataForYear {
	date: string;
	peopleBySlug: Record<string, PersonInfo>;
	sessionsBySlug: Record<string, SessionInfo>;
}

export interface PersonInfo {
	biography: null | string;
	image: ImageMetadata;
	links: PersonLinks;
	name: string;
	qualification: null | string;
	slug: string;
}

export interface PersonLinks {
	bluesky?: null | string;
	github?: null | string;
	gitlab?: null | string;
	linkedin?: null | string;
	mastodon?: null | string;
	medium?: null | string;
	twitch?: null | string;
	website?: null | string;
	x?: null | string;
	youtube?: null | string;
}

export interface SessionInfo {
	description: string;
	people: PersonInfo[];
	slug: string;
	tags: string[];
	title: string;
}
