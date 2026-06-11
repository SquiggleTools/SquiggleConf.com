import type { ImageMetadata } from "astro";

export type CollageLayout =
	| "auto"
	| "avatar-duo"
	| "avatar-trio"
	| "duo"
	| "feature-five"
	| "trio";

export interface CollagePhoto {
	alt: string;
	decorative?: boolean;
	objectPosition?: string;
	src: ImageMetadata;
}

export type CollageShape = "avatar" | "photo";

export interface ExploreChoiceData {
	alt: string;
	badgeLabel?: string;
	description: string;
	image: ImageMetadata;
	imageVariant?: "default" | "rest";
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
	imageAlt?: string;
	name: string;
	qualification: string;
	slug?: string;
}

export interface TalkCardData extends PersonCardData {
	isPlaceholder?: boolean;
	title: string;
}

export interface TimelineEntryData {
	id: TimelineEntryId;
	location: TimelineLocationRef;
	subtitle?: string;
	timeLabel: string;
	timeMode: TimelineTimeMode;
	title: string;
	variant?: TimelineEntryVariant;
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
	| "launch"
	| "lunch"
	| "mcs"
	| "simons-imax-theater"
	| "syntax-live"
	| "talks-afternoon"
	| "talks-late"
	| "talks-morning";

export type TimelineEntryVariant =
	| "break"
	| "default"
	| "explore"
	| "fireside"
	| "funRun"
	| "lunch"
	| "mcs"
	| "syntax"
	| "talks"
	| "talksAfternoon";

export type TimelineLocationRef = { label: string } | { venueId: VenueId };

export type TimelineTimeMode = "point" | "range";

export interface VenueData {
	addressLines?: readonly string[];
	id: VenueId;
	mapUrl: string;
	mobileLabel?: string;
	name: string;
	railLines: readonly string[];
}

export type VenueId = "aquarium" | "nedDevines" | "quincyMarket" | "urbanWild";
