import type { ImageMetadata } from "astro";

export interface CollageFrame {
	height?: string;
	left?: string;
	rotate?: string;
	top?: string;
	width?: string;
	zIndex?: number;
}

export type CollageLayout =
	| "avatar-duo"
	| "avatar-pair"
	| "avatar-trio"
	| "duo"
	| "feature-five"
	| "trio";

export interface CollagePhoto {
	alt: string;
	decorative?: boolean;
	/** Overrides the layout's default placement for this photo. */
	frame?: CollageFrame;
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
	objectPosition?: string;
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

export type TimelineEntryVariant = "break" | "fun-run";

export type TimelineTimeMode = "point" | "range";

export interface VenueData {
	mapUrl: string;
	name: string;
}

export type VenueId = "aquarium" | "nedDevines" | "quincyMarket" | "urbanWild";
