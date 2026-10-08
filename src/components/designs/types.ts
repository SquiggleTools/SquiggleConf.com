export interface DesignMeta {
	author: string;
	description: string;
	intensity: "mild" | "moderate";
	name: string;
}

export type DesignMountPoint =
	| "after-hero"
	| "before-header"
	| "cfp-backdrop"
	| "cfp-before"
	| "cfp-end"
	| "cfp-top"
	| "hero-after-lockup"
	| "hero-backdrop"
	| "hero-end"
	| "hero-start";
