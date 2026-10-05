export interface HistoricalDataForYear {
	date: string;
	peopleBySlug: Record<string, PersonInfo>;
	sessionsBySlug: Record<string, SessionInfo>;
	sponsors: SponsorInfo[];
}

export interface PersonInfo {
	biography: string;
	image: ImageMetadata;
	links: PersonLinks;
	name: string;
	qualification: string;
	slug: string;
}

export interface PersonLinks {
	bluesky?: string;
	github?: string;
	gitlab?: string;
	linkedin?: string;
	mastodon?: string;
	medium?: string;
	twitch?: string;
	website?: string;
	x?: string;
	youtube?: string;
}

export interface SessionInfo {
	description: string;
	people: PersonInfo[];
	slug: string;
	tags: string[];
	title: string;
}

export interface SponsorInfo {
	href: string;
	logos: {
		dark: ImageMetadata;
		light: ImageMetadata;
	};
	placement: number;
	title: string;
}
