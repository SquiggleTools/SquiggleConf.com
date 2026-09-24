import type { ImageMetadata } from "astro";

export type CollageLayout =
	| "avatar-duo"
	| "avatar-trio"
	| "duo"
	| "feature-five"
	| "trio";

export interface CollagePhoto {
	alt: string;
	decorative?: boolean;
	objectPosition?: string;
	placeholder?: boolean;
	src: ImageMetadata;
}

export type CollageShape = "avatar" | "photo";

export interface ExploreChoiceData {
	alt: string;
	badgeLabel?: string;
	description: string;
	image: ImageMetadata;
	imageVariant?: "rest";
	title: string;
}

export interface LunchSpotData {
	alt: string;
	image: ImageMetadata;
	name: string;
	url: string;
}

export interface PersonCardData {
	image: ImageMetadata;
	name: string;
	placeholder?: boolean;
	qualification: string;
}

export interface TalkCardData extends PersonCardData {
	title: string;
}

export type TimelineEntryId =
	| "after-party"
	| "arrive-urban-wild"
	| "big-rav"
	| "check-in"
	| "cookies-break"
	| "explore-boston"
	| "fireside-chat"
	| "fun-run"
	| "launch-party"
	| "live-podcast-recording"
	| "lunch"
	| "meet-your-mcs"
	| "simons-imax-theater"
	| "talks-afternoon"
	| "talks-late"
	| "talks-morning";

export type TimelineEntryVariant =
	| "break"
	| "explore"
	| "fireside"
	| "funRun"
	| "lunch"
	| "mcs"
	| "podcast"
	| "talks"
	| "talksAfternoon";

export type TimelineTimeMode = "point" | "range";

export interface VenueData {
	mapUrl: string;
	name: string;
}

export type VenueId = "aquarium" | "nedDevines" | "quincyMarket" | "urbanWild";
