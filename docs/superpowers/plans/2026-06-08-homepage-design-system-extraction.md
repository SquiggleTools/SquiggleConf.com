# Homepage Design System Extraction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.
> Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extract the rich `src/pages/index.astro` homepage into homepage-local design system components while preserving its current visual and interaction behavior.

**Architecture:** Keep `index.astro` as the route composition layer, and move homepage-specific structure, styles, data, and scripts into `src/components/home/`.
Start with data/types and leaf components, then extract media/collage components, then timeline chrome, then section-level behavior.
Use subagents for independent tasks and read-only review passes, but keep final integration single-threaded.

**Tech Stack:** Astro 5, TypeScript, Astro scoped styles with explicit `:global(...)` contracts, Astro `Image`, vanilla browser scripts, pnpm scripts (`pnpm check`, `pnpm build`).

---

## Scope check

This plan implements one subsystem: the homepage-local design system extraction for `src/pages/index.astro`.
It intentionally ignores other pages and does not build a global component library.

## File structure

Create a new homepage-local component directory:

```text
src/components/home/
├── Collage.astro
├── ExploreChoiceCard.astro
├── ExploreChoices.astro
├── HomeHeroLockup.astro
├── HomePreviewBanner.astro
├── HostList.astro
├── LunchCarousel.astro
├── PersonCard.astro
├── PostcardFlipCard.astro
├── PostcardIntro.astro
├── ScheduleTimeline.astro
├── SwimmingFishLayer.astro
├── TalkCard.astro
├── TalkList.astro
├── TerminalShopButton.astro
├── TimelineCopy.astro
├── TimelineDayCap.astro
├── TimelineEntry.astro
├── TimelineGridIntro.astro
├── TimelineHeroImage.astro
├── TimelineRailTime.astro
├── TimelineVenueMarker.astro
├── data.ts
└── types.ts
```

Modify:

```text
src/pages/index.astro
```

Do not modify unrelated pages/components.
Leave the existing untracked `src/assets/.DS_Store` untouched.

## Execution notes for subagents

- Use one coding subagent per task only when the task owns disjoint files.
- Do not dispatch two coding subagents that both edit `src/pages/index.astro`.
- Prefer read-only subagents for visual parity review and interaction audits after integration checkpoints.
- After each coding subagent returns, the orchestrator must inspect the diff and run the task verification command before continuing.
- Commits in this repo may fail under GPG signing in non-interactive sessions.
If the commit fails with a GPG pinentry/passphrase error, retry the same commit with `git commit --no-gpg-sign -m "same message as the failed commit"` and mention that in the final status.

---

### Task 1: Capture baseline and create homepage data/types

**Files:**

- Create: `src/components/home/types.ts`
- Create: `src/components/home/data.ts`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Record current baseline state**

Run:

```bash
git status --short
pnpm check
```

Expected:

- `git status --short` may show the existing untracked `src/assets/.DS_Store`; do not touch it.
- `pnpm check` should complete without new errors before extraction starts.
If it fails, save the full output in the task notes and do not begin moving code until the failure is understood.

- [ ] **Step 2: Create the homepage type file**

Create `src/components/home/types.ts` with this exact starting shape:

```ts
import type { ImageMetadata } from "astro";

export type CollageLayout =
	| "auto"
	| "duo"
	| "trio"
	| "feature-five"
	| "avatar-duo"
	| "avatar-trio";

export type CollageShape = "avatar" | "photo";

export interface CollagePhoto {
	alt: string;
	decorative?: boolean;
	objectPosition?: string;
	src: ImageMetadata;
}

export type TimelineEntryId =
	| "launch"
	| "fun-run"
	| "check-in"
	| "simons-imax-theater"
	| "mcs"
	| "talks-morning"
	| "cookies-break"
	| "talks-late"
	| "lunch"
	| "talks-afternoon"
	| "explore-boston"
	| "arrive-urban-wild"
	| "syntax-live"
	| "fireside-chat"
	| "after-party"
	| "big-rav";

export type TimelineEntryVariant =
	| "break"
	| "default"
	| "explore"
	| "fireside"
	| "funRun"
	| "lunch"
	| "mcs"
	| "syntax"
	| "talks";

export type TimelineTimeMode = "point" | "range";

export type VenueId = "aquarium" | "nedDevines" | "quincyMarket" | "urbanWild";

export interface VenueData {
	addressLines?: readonly string[];
	id: VenueId;
	mapUrl: string;
	mobileLabel?: string;
	name: string;
	railLines: readonly string[];
}

export type TimelineLocationRef = { label: string } | { venueId: VenueId };

export interface TimelineEntryData {
	id: TimelineEntryId;
	location: TimelineLocationRef;
	subtitle?: string;
	timeLabel: string;
	timeMode: TimelineTimeMode;
	title: string;
	variant?: TimelineEntryVariant;
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

export interface LunchSpotData {
	alt: string;
	image: ImageMetadata;
	name: string;
	url: string;
}

export interface ExploreChoiceData {
	alt: string;
	badgeLabel?: string;
	description: string;
	image: ImageMetadata;
	imageVariant?: "default" | "rest";
	title: string;
}
```

- [ ] **Step 3: Create `data.ts` by moving current data exactly**

Create `src/components/home/data.ts`.
Move these current imports/constants out of `src/pages/index.astro` without changing any values:

- `speakersBySlug` import
- timeline fish imports
- all `src/assets/2027/*` imports currently used only by the homepage
- `dillonMulroy` import
- `locationLinks`
- `talksSessions`
- `lateTalksSessions`
- `afternoonTalksSessions`
- `timelineMCs`
- `lunchSpots`

Export them under semantic names:

```ts
export const venues = {
	aquarium: {
		addressLines: [
			"New England Aquarium",
			"Simons Theater",
			"1 Central Wharf",
			"Boston, MA 02110",
		],
		id: "aquarium",
		mapUrl: "https://maps.app.goo.gl/FodmfsLGZYALV1Hh9",
		name: "New England Aquarium",
		railLines: ["New", "England", "Aquarium"],
	},
	nedDevines: {
		id: "nedDevines",
		mapUrl: "https://maps.app.goo.gl/rD3zWzuJ1U9VuSdN9",
		name: "Ned Devine's",
		railLines: ["Ned", "Devine's"],
	},
	quincyMarket: {
		id: "quincyMarket",
		mapUrl: "https://maps.app.goo.gl/mQyHoaGZgip8pfux5",
		name: "Quincy Market",
		railLines: ["Quincy", "Market"],
	},
	urbanWild: {
		id: "urbanWild",
		mapUrl: "https://maps.app.goo.gl/ADbjjYdyB3AVstH67",
		mobileLabel: "Urban Wild Boston",
		name: "Urban Wild Boston",
		railLines: ["Urban", "Wild", "Boston"],
	},
} satisfies Record<VenueId, VenueData>;

export const talkBlocks = {
	afternoon: afternoonTalksSessions,
	lateMorning: lateTalksSessions,
	morning: talksSessions,
} satisfies Record<
	"afternoon" | "lateMorning" | "morning",
	readonly TalkCardData[]
>;

export const timelineMCs =
	timelineMCsFromSpeakers satisfies readonly PersonCardData[];
export const lunchSpots = lunchSpotOptions satisfies readonly LunchSpotData[];
export const timelineFish = [
	timelineFish1,
	timelineFish2,
	timelineFish3,
	timelineFish4,
	timelineFish5,
] as const;

export const timelineEntries = {
	"after-party": {
		id: "after-party",
		location: { venueId: "urbanWild" },
		timeLabel: "7:30-9pm",
		timeMode: "range",
		title: "After Party",
	},
	"arrive-urban-wild": {
		id: "arrive-urban-wild",
		location: { venueId: "urbanWild" },
		timeLabel: "6pm",
		timeMode: "point",
		title: "Arrive at Urban Wild",
		variant: "syntax",
	},
	"big-rav": {
		id: "big-rav",
		location: { venueId: "urbanWild" },
		timeLabel: "9pm",
		timeMode: "point",
		title: "Big Rav",
	},
	"check-in": {
		id: "check-in",
		location: { venueId: "aquarium" },
		timeLabel: "8am",
		timeMode: "point",
		title: "Check In",
	},
	"cookies-break": {
		id: "cookies-break",
		location: { venueId: "aquarium" },
		timeLabel: "10:30am",
		timeMode: "point",
		title: "Milk & Cookies Break",
		variant: "break",
	},
	"explore-boston": {
		id: "explore-boston",
		location: { label: "Boston" },
		subtitle: "choose your own adventure",
		timeLabel: "3:30pm",
		timeMode: "point",
		title: "Explore Boston",
		variant: "explore",
	},
	"fireside-chat": {
		id: "fireside-chat",
		location: { venueId: "urbanWild" },
		timeLabel: "7pm",
		timeMode: "point",
		title: "Fireside Chat",
		variant: "fireside",
	},
	"fun-run": {
		id: "fun-run",
		location: { venueId: "aquarium" },
		timeLabel: "7-7:30am",
		timeMode: "range",
		title: "Fun Run",
		variant: "funRun",
	},
	launch: {
		id: "launch",
		location: { venueId: "nedDevines" },
		timeLabel: "6-9pm",
		timeMode: "range",
		title: "Launch Party!",
	},
	lunch: {
		id: "lunch",
		location: { venueId: "quincyMarket" },
		timeLabel: "12pm",
		timeMode: "point",
		title: "Lunch",
		variant: "lunch",
	},
	mcs: {
		id: "mcs",
		location: { venueId: "aquarium" },
		timeLabel: "9am",
		timeMode: "point",
		title: "Meet your MCs!",
		variant: "mcs",
	},
	"simons-imax-theater": {
		id: "simons-imax-theater",
		location: { venueId: "aquarium" },
		timeLabel: "8am",
		timeMode: "point",
		title: "Talks in an IMAX Theater",
		variant: "mcs",
	},
	"syntax-live": {
		id: "syntax-live",
		location: { venueId: "urbanWild" },
		timeLabel: "6pm",
		timeMode: "point",
		title: "Syntax.fm Live",
		variant: "syntax",
	},
	"talks-afternoon": {
		id: "talks-afternoon",
		location: { venueId: "aquarium" },
		timeLabel: "2pm",
		timeMode: "point",
		title: "Talks",
		variant: "talks",
	},
	"talks-late": {
		id: "talks-late",
		location: { venueId: "aquarium" },
		timeLabel: "11am",
		timeMode: "point",
		title: "Talks",
		variant: "talks",
	},
	"talks-morning": {
		id: "talks-morning",
		location: { venueId: "aquarium" },
		timeLabel: "9am",
		timeMode: "point",
		title: "Talks",
		variant: "talks",
	},
} satisfies Record<TimelineEntryId, TimelineEntryData>;
```

When moving `timelineMCs`, rename the local computed array to `timelineMCsFromSpeakers` before exporting it to avoid exporting and declaring the same identifier twice.
When moving `lunchSpots`, rename the local array to `lunchSpotOptions` before exporting it.

Also export named image assets used by page-specific markup:

```ts
export {
	bigRav,
	duck1,
	duck2,
	dillonMulroy,
	funrun1,
	funrun2,
	harbor,
	harborwalk,
	lunchBerryTwist,
	lunchBostonChowda,
	lunchRegina,
	lunchSalad,
	lunchWickedLobsta,
	milkcookies1,
	milkcookies2,
	milkcookies3,
	networking,
	postcardBack,
	postcardFront,
	rest1,
	ryanDahl,
	scottTolinski,
	simonsTheater,
	terminalShop,
	thePrimeagen,
	urbanwild1,
	urbanwild2,
	urbanwild3,
	urbanwild4,
	urbanwild5,
	urbanwildLogo,
	wesBos,
};
```

Use the existing import names from `index.astro`.
If a name is removed from the page and not used in `data.ts`, remove its import from the page in the same step.

- [ ] **Step 4: Update `index.astro` imports**

In `src/pages/index.astro`, replace the moved local constants/imports with imports from `~/components/home/data`.

Keep these in `index.astro` for now:

- `@fontsource/shantell-sans`
- `Image` from `astro:assets`
- existing site component imports
- `squiggleConfLogoRaw` until `HomeHeroLockup` is extracted
- `squiggleConfLogoSvg` until `HomeHeroLockup` is extracted

- [ ] **Step 5: Verify type/data extraction**

Run:

```bash
pnpm check
```

Expected: exit 0.

- [ ] **Step 6: Commit the data/types checkpoint**

Run:

```bash
git add src/components/home/types.ts src/components/home/data.ts src/pages/index.astro
git commit -m "Extract homepage schedule data"
```

If GPG signing fails in the agent environment, retry with:

```bash
git commit --no-gpg-sign -m "Extract homepage schedule data"
```

---

### Task 2: Extract simple leaf components

**Files:**

- Create: `src/components/home/HomePreviewBanner.astro`
- Create: `src/components/home/HomeHeroLockup.astro`
- Create: `src/components/home/TimelineCopy.astro`
- Create: `src/components/home/TerminalShopButton.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create `HomePreviewBanner.astro`**

Move the preview banner markup and `.private-preview-banner` styles into `src/components/home/HomePreviewBanner.astro`.

Component markup:

```astro
<div class="private-preview-banner" aria-label="Private preview notice">
	Private Preview - Names are non-confirmed examples. Please do not share!
</div>
```

Component styles must include the current desktop and mobile `.private-preview-banner` rules.
The mobile rule currently lives inside the `@media (width < 900px)` block; move that rule with the component.

- [ ] **Step 2: Create `HomeHeroLockup.astro`**

Move the logo import/fill replacement, hero intro markup, and hero styles into `src/components/home/HomeHeroLockup.astro`.

Frontmatter shape:

```astro
---
import squiggleConfLogoRaw from "~/assets/2027/SquiggleConf-Logo.svg?raw";

const squiggleConfLogoSvg = squiggleConfLogoRaw.replace(
	'fill="white"',
	'fill="var(--hero-logo-fill, white)"',
);
---
```

Markup:

```astro
<div class="hero-intro">
	<div
		class="hero-logo"
		aria-label="SquiggleConf"
		role="img"
		set:html={squiggleConfLogoSvg}
	/>
	<p class="hero-subtitle">May 7th · Boston, Massachusetts</p>
</div>
```

Styles: move the current `.hero-intro`, `.hero-logo`, `:global(html.dark) .hero-logo`, `.hero-logo :global(svg)`, and `.hero-subtitle` rules exactly.

- [ ] **Step 3: Create `TimelineCopy.astro`**

Create a small wrapper that preserves the `.timeline-copy` class and accepts optional class merging.

```astro
---
interface Props {
	class?: string;
}

const { class: className } = Astro.props;
---

<div class:list={["timeline-copy", className]}>
	<slot />
</div>
```

Do not move `.timeline-copy` styles yet; they remain in the timeline styling task.

- [ ] **Step 4: Create `TerminalShopButton.astro`**

Create `src/components/home/TerminalShopButton.astro`:

```astro
---
import { Image } from "astro:assets";

import { terminalShop } from "~/components/home/data";
---

<a
	class="timeline-checkin-button"
	href="https://terminal.shop"
	rel="noreferrer"
	target="_blank"
>
	<Image
		alt=""
		aria-hidden="true"
		class="timeline-checkin-button-icon"
		src={terminalShop}
	/>
	<span>terminal.shop coffee</span>
</a>
```

Move the current `.timeline-checkin-button`, hover/focus, icon, and span styles into this component.
Use `:global(.timeline-content:hover)` only if the moved rules need to respond to timeline parent state; otherwise keep component-scoped selectors.

- [ ] **Step 5: Replace usages in `index.astro`**

Modify `src/pages/index.astro`:

- import `HomePreviewBanner`, `HomeHeroLockup`, `TimelineCopy`, and `TerminalShopButton`
- replace the `pageTop` banner `<div>` with `<HomePreviewBanner slot="pageTop" />`
- replace the hero intro markup with `<HomeHeroLockup />`
- replace check-in CTA markup with `<TerminalShopButton />`
- replace simple `div.timeline-copy` wrappers with `TimelineCopy` wrappers, preserving each wrapper's existing children exactly
- replace `div.break-copy.timeline-copy` wrappers with `<TimelineCopy class="break-copy">`, preserving each wrapper's existing children exactly
- replace `div.lunch-copy.timeline-copy` wrappers with `<TimelineCopy class="lunch-copy">`, preserving each wrapper's existing children exactly

- [ ] **Step 6: Verify leaf components**

Run:

```bash
pnpm check
pnpm build
```

Expected: both exit 0.

- [ ] **Step 7: Commit the leaf component checkpoint**

Run:

```bash
git add src/components/home src/pages/index.astro
git commit -m "Extract homepage leaf components"
```

Use `--no-gpg-sign` if the non-interactive environment cannot sign.

---

### Task 3: Extract universal `Collage`

**Files:**

- Create: `src/components/home/Collage.astro`
- Modify: `src/components/home/types.ts`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create the `Collage` component**

Create `src/components/home/Collage.astro` with this frontmatter and markup contract:

```astro
---
import { Image } from "astro:assets";

import type {
	CollageLayout,
	CollagePhoto,
	CollageShape,
} from "~/components/home/types";

interface Props {
	ariaLabel?: string;
	class?: string;
	decorative?: boolean;
	layout?: CollageLayout;
	photos: readonly CollagePhoto[];
	shape?: CollageShape;
}

const {
	ariaLabel,
	class: className,
	decorative = false,
	layout = "auto",
	photos,
	shape = "photo",
} = Astro.props;

const resolvedLayout =
	layout === "auto"
		? shape === "avatar"
			? photos.length === 2
				? "avatar-duo"
				: "avatar-trio"
			: photos.length === 2
				? "duo"
				: photos.length === 5
					? "feature-five"
					: "trio"
		: layout;

const groupAttributes = ariaLabel
	? { "aria-label": ariaLabel, role: "group" }
	: decorative
		? { "aria-hidden": "true" }
		: {};
---

<div
	class:list={[
		"collage",
		`collage-${resolvedLayout}`,
		`collage-${shape}`,
		className,
	]}
	{...groupAttributes}
>
	{
		photos.map((photo, index) => (
			<div class:list={["collage-item", `collage-item-${index + 1}`]}>
				<Image
					alt={decorative || photo.decorative ? "" : photo.alt}
					aria-hidden={decorative || photo.decorative ? "true" : undefined}
					loading="lazy"
					src={photo.src}
					style={
						photo.objectPosition
							? `object-position: ${photo.objectPosition}`
							: undefined
					}
				/>
			</div>
		))
	}
</div>
```

If Astro rejects spreading `groupAttributes`, replace it with explicit conditional attributes while preserving the same rendered behavior.

- [ ] **Step 2: Add `Collage` CSS**

Move the current shared image-frame rules for collage/photo/avatar groups into `Collage.astro`, converted to `.collage` selectors.
Preserve the visual contract:

- white frame background
- `var(--timeline-image-border-width)` and `var(--timeline-image-border-color)`
- `0 0.25rem 0.7rem rgba(4, 25, 48, 0.12)` shadow
- `0.35rem` radius for photo collages
- `999px` radius for avatar collages
- `object-fit: cover`
- hover/focus scaling from ancestor `.timeline-content:hover` / `.timeline-content:focus-within`
- mobile active scaling from `.timeline-content[data-mobile-active="true"]`
- reduced-motion transition disabling

Add layout CSS for:

- `.collage-duo`: two rotated overlapping cards matching the current Fun Run visual
- `.collage-trio`: three fanned cards shared by Launch Party and Milk & Cookies
- `.collage-feature-five`: five-card After Party layout with one dominant lead card
- `.collage-avatar-duo`: Fireside circular avatar stack
- `.collage-avatar-trio`: Syntax circular avatar stack

Use CSS custom properties for per-instance sizing where necessary:

```css
.collage {
	--collage-height: 9rem;
	--collage-width: min(100%, 31rem);
}
```

Do not expose image loading as a prop; every internal `Image` must render `loading="lazy"`.

- [ ] **Step 3: Replace Launch Party and Milk & Cookies collages**

In `index.astro`, replace the current Launch Party and Milk & Cookies collage markup with:

```astro
<Collage
	ariaLabel="Launch party collage"
	class="launchparty-collage"
	layout="trio"
	photos={[
		{ alt: "People networking at SquiggleConf", src: networking },
		{ alt: "Boston harbor near the venue", src: harbor },
		{ alt: "Speakers gathered together at the event", src: harborwalk },
	]}
/>
```

```astro
<Collage
	ariaLabel="Milk and Cookies break collage"
	class="cookiesbreak-collage"
	layout="trio"
	photos={[
		{ alt: "Milk and cookies spread", src: milkcookies3 },
		{ alt: "Cookies at the break", src: milkcookies1 },
		{
			alt: "Milk and cookies break crowd",
			objectPosition: "10% 0%",
			src: milkcookies2,
		},
	]}
/>
```

- [ ] **Step 4: Replace Fun Run desktop/mobile collages**

Replace both current Fun Run collage DOM blocks with `Collage layout="duo"`.
Keep one desktop instance and one mobile decorative instance so placement remains equivalent.

Desktop:

```astro
<Collage
	ariaLabel="Fun run collage"
	class="funrun-collage funrun-collage-desktop"
	layout="duo"
	photos={[
		{
			alt: "Fun Run route by the waterfront",
			objectPosition: "10% 10%",
			src: funrun1,
		},
		{
			alt: "Runners gathering before the Fun Run",
			objectPosition: "38% 50%",
			src: funrun2,
		},
	]}
/>
```

Mobile decorative duplicate:

```astro
<Collage
	class="funrun-collage funrun-collage-mobile"
	decorative
	layout="duo"
	photos={[
		{ alt: "", decorative: true, objectPosition: "10% 10%", src: funrun1 },
		{ alt: "", decorative: true, objectPosition: "38% 50%", src: funrun2 },
	]}
/>
```

- [ ] **Step 5: Replace After Party and avatar stacks**

After Party:

```astro
<Collage
	ariaLabel="After party collage"
	class="afterparty-collage"
	layout="feature-five"
	photos={[
		{ alt: "", decorative: true, src: urbanwild1 },
		{ alt: "", decorative: true, src: urbanwild2 },
		{ alt: "", decorative: true, src: urbanwild3 },
		{ alt: "", decorative: true, src: urbanwild4 },
		{ alt: "", decorative: true, src: urbanwild5 },
	]}
/>
```

Syntax.fm:

```astro
<Collage
	ariaLabel="Syntax.fm live guests"
	class="syntaxlive-avatars"
	layout="avatar-trio"
	photos={[
		{ alt: "ThePrimeagen portrait", src: thePrimeagen },
		{ alt: "Wes Bos portrait", src: wesBos },
		{ alt: "Scott Tolinski portrait", src: scottTolinski },
	]}
	shape="avatar"
/>
```

Fireside:

```astro
<Collage
	ariaLabel="Fireside chat guests"
	class="firesidechat-avatars"
	layout="avatar-duo"
	photos={[
		{ alt: "Ryan Dahl portrait", src: ryanDahl },
		{ alt: "Dillon Mulroy portrait", src: dillonMulroy },
	]}
	shape="avatar"
/>
```

- [ ] **Step 6: Remove replaced CSS from `index.astro`**

Remove the old CSS rules whose only purpose was the replaced collage DOM:

- `.funrun-photo*`
- `.launchparty-photo*`
- `.cookiesbreak-collage` item-specific `.break-photo*` layout rules after equivalent `Collage` CSS exists
- `.afterparty-photo*`
- `.syntax-avatar*`, `.syntax-hero-image`, `.syntaxlive-avatars` layout rules after equivalent `Collage` CSS exists
- `.fireside-avatar*`, `.fireside-hero-image`, `.firesidechat-avatars` layout rules after equivalent `Collage` CSS exists

Keep parent body layout rules such as `.break-body`, `.funrun-body`, `.event-body`, `.timeline-content-syntax`, and `.timeline-content-fireside` until their owning components are extracted.

- [ ] **Step 7: Verify all collage images are lazy**

Run:

```bash
grep -R "loading=\"eager\"" -n src/components/home/Collage.astro src/pages/index.astro
pnpm check
pnpm build
```

Expected:

- `grep` prints no matches for `Collage.astro`.
- `pnpm check` exits 0.
- `pnpm build` exits 0.

- [ ] **Step 8: Commit the collage checkpoint**

Run:

```bash
git add src/components/home/Collage.astro src/components/home/types.ts src/pages/index.astro
git commit -m "Add homepage collage component"
```

Use `--no-gpg-sign` if the non-interactive environment cannot sign.

---

### Task 4: Extract cards, lists, choices, and lunch carousel

**Files:**

- Create: `src/components/home/TalkCard.astro`
- Create: `src/components/home/TalkList.astro`
- Create: `src/components/home/PersonCard.astro`
- Create: `src/components/home/HostList.astro`
- Create: `src/components/home/ExploreChoiceCard.astro`
- Create: `src/components/home/ExploreChoices.astro`
- Create: `src/components/home/LunchCarousel.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create talk card components**

Create `TalkCard.astro` with the current `.talk-card`, `.talk-avatar`, `.talk-avatar-placeholder`, `.talk-avatar-placeholder-mark`, `.talk-copy`, `.talk-speaker`, and `.talk-role` markup/styles.

Props:

```ts
interface Props {
	talk: TalkCardData;
}
```

Rendering contract:

```astro
<article class="talk-card">
	<div
		class:list={[
			"talk-avatar",
			talk.isPlaceholder && "talk-avatar-placeholder",
		]}
	>
		<Image alt={talk.name} src={talk.image} />
		{
			talk.isPlaceholder && (
				<span class="talk-avatar-placeholder-mark" aria-hidden="true">
					?
				</span>
			)
		}
	</div>
	<div class="talk-copy">
		<h3>{talk.title}</h3>
		<p class="talk-speaker">{talk.name}</p>
		<p class="talk-role">{talk.qualification}</p>
	</div>
</article>
```

Create `TalkList.astro`:

```astro
---
import TalkCard from "~/components/home/TalkCard.astro";
import type { TalkCardData } from "~/components/home/types";

interface Props {
	ariaLabel: string;
	short?: boolean;
	talks: readonly TalkCardData[];
}

const { ariaLabel, short = false, talks } = Astro.props;
---

<div
	class:list={["talks-list", short && "talks-list-short"]}
	aria-label={ariaLabel}
>
	{talks.map((talk) => <TalkCard talk={talk} />)}
</div>
```

- [ ] **Step 2: Create person/host components**

Create `PersonCard.astro` for the MC cards with current `.timeline-host-card`, `.timeline-host-avatar`, `.timeline-host-copy`, and `.timeline-host-role` markup/styles.

Create `HostList.astro`:

```astro
---
import PersonCard from "~/components/home/PersonCard.astro";
import type { PersonCardData } from "~/components/home/types";

interface Props {
	ariaLabel: string;
	hosts: readonly PersonCardData[];
}

const { ariaLabel, hosts } = Astro.props;
---

<div class="timeline-hosts-list" aria-label={ariaLabel}>
	{hosts.map((host) => <PersonCard person={host} />)}
</div>
```

- [ ] **Step 3: Create explore choice components**

Create `ExploreChoiceCard.astro` with current `.explore-card`, `.explore-choice`, `.explore-radio`, `.explore-radio-dot`, `.explore-card-body`, `.explore-photo`, `.explore-photo-rest`, `.explore-copy`, and `.explore-spots-left` markup/styles.

Props:

```ts
interface Props {
	choice: ExploreChoiceData;
}
```

Create `ExploreChoices.astro`:

```astro
---
import ExploreChoiceCard from "~/components/home/ExploreChoiceCard.astro";
import type { ExploreChoiceData } from "~/components/home/types";

interface Props {
	choices: readonly ExploreChoiceData[];
}

const { choices } = Astro.props;
---

<div class="explore-options" aria-label="Explore Boston options">
	{choices.map((choice) => <ExploreChoiceCard choice={choice} />)}
</div>
```

- [ ] **Step 4: Add `exploreChoices` to `data.ts`**

Export the three current choices from `data.ts`:

```ts
export const exploreChoices = [
	{
		alt: "Duck boat on the water",
		badgeLabel: "19 spots left",
		description:
			"A SquiggleConf tradition: an amphibious boat! See more of the city in one shot with a classic Boston ride.",
		image: duck2,
		title: "Duck Boat Tour",
	},
	{
		alt: "Scavenger hunt clue card",
		description:
			"A loose city walk with clues, checkpoints, and small teams racing to win a big prize.",
		image: duck1,
		title: "Scavenger Hunt",
	},
	{
		alt: "Quiet place to rest up",
		description:
			"Take a quiet block to recharge, reset, and come back ready for the evening without over-scheduling the day.",
		image: rest1,
		imageVariant: "rest",
		title: "Rest Up",
	},
] satisfies readonly ExploreChoiceData[];
```

- [ ] **Step 5: Create `LunchCarousel.astro`**

Move the current lunch carousel markup, `.lunch-carousel*` styles, and lunch carousel script into `LunchCarousel.astro`.

Props:

```ts
interface Props {
	spots: readonly LunchSpotData[];
}
```

The component must preserve these hooks:

- `[data-lunch-carousel]`
- `[data-lunch-track]`
- `[data-lunch-slide]`
- `[data-lunch-dot]`
- `data-lunch-index`
- `aria-hidden`
- `aria-pressed`
- CSS var `--lunch-carousel-index`

Every slide image remains `loading={index === 0 ? "eager" : "lazy"}` for `LunchCarousel`; the always-lazy rule applies only to `Collage`.

- [ ] **Step 6: Replace usages in `index.astro`**

Replace current repeated talk maps with:

```astro
<TalkList ariaLabel="Speaker talks" talks={talkBlocks.morning} />
<TalkList ariaLabel="Late morning talks" short talks={talkBlocks.lateMorning} />
<TalkList ariaLabel="Afternoon talks" talks={talkBlocks.afternoon} />
```

Replace MC map with:

```astro
<HostList ariaLabel="Conference MCs" hosts={timelineMCs} />
```

Replace explore option cards with:

```astro
<ExploreChoices choices={exploreChoices} />
```

Replace the lunch carousel DOM with:

```astro
<LunchCarousel spots={lunchSpots} />
```

- [ ] **Step 7: Remove moved CSS/script from `index.astro`**

Remove styles and script blocks that now live in the new components:

- talk card/list styles
- host card/list styles
- explore choice styles
- lunch carousel styles
- lunch carousel script loop

Do not remove shared timeline card, grid, media-frame, or mobile-active rules until later tasks replace them.

- [ ] **Step 8: Verify lists and lunch extraction**

Run:

```bash
pnpm check
pnpm build
```

Expected: both exit 0.

- [ ] **Step 9: Commit the card/list/carousel checkpoint**

Run:

```bash
git add src/components/home src/pages/index.astro
git commit -m "Extract homepage cards and carousel"
```

Use `--no-gpg-sign` if the non-interactive environment cannot sign.

---

### Task 5: Extract timeline chrome components

**Files:**

- Create: `src/components/home/TimelineEntry.astro`
- Create: `src/components/home/TimelineVenueMarker.astro`
- Create: `src/components/home/TimelineRailTime.astro`
- Create: `src/components/home/TimelineDayCap.astro`
- Create: `src/components/home/TimelineGridIntro.astro`
- Create: `src/components/home/TimelineHeroImage.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create `TimelineEntry.astro`**

Create a component that renders one `.timeline-content` root element directly.

Props:

```ts
import type { TimelineEntryData, VenueData } from "~/components/home/types";

interface Props {
	class?: string;
	entry: TimelineEntryData;
	venues: Record<string, VenueData>;
}
```

Markup contract:

```astro
<div
	class:list={["timeline-content", className]}
	data-timeline-entry={entry.id}
>
	<div class="timeline-heading-line">
		<h2>{entry.title}</h2>
		<p
			class:list={[
				"timeline-subtitle",
				"timeline-inline-time",
				entry.timeMode === "point" && "timeline-inline-time-point",
			]}
		>
			{entry.timeLabel}
		</p>
	</div>
	{entry.subtitle && <p class="timeline-subtitle">{entry.subtitle}</p>}
	<div class="timeline-mobile-meta">
		{mobileLocationMarkup}
	</div>
	<slot />
</div>
```

`mobileLocationMarkup` must render:

- a map link when `entry.location` is `{ venueId }`
- a plain `<p class="timeline-mobile-location">` when `entry.location` is `{ label }`

Move the `.timeline-content`, `.timeline-heading-line`, `.timeline-title-row`, `.timeline-title-copy`, `.timeline-subtitle`, `.timeline-inline-time`, `.timeline-inline-time-point`, `.timeline-mobile-meta`, `.timeline-mobile-location`, hover/focus, pointer glow, and mobile-active card styles into this component.
Use `:global(...)` selectors for ancestor/descendant contracts that cross component boundaries.

- [ ] **Step 2: Create venue, rail, cap, and intro components**

Create `TimelineVenueMarker.astro` with props:

```ts
interface Props {
	class?: string;
	last?: boolean;
	span?: 2 | 5 | 7;
	venue: VenueData;
	variant?: "aquariumAfternoon";
}
```

It renders a direct `.timeline-venue` root and a `.timeline-venue-stack` child.
Include a default slot inside the stack after the link for the turtle decoration.

Create `TimelineRailTime.astro` with props:

```ts
interface Props {
	bottom?: boolean;
	span?: 2;
	time: string;
}
```

Create `TimelineDayCap.astro` with props:

```ts
interface Props {
	date: string;
	day: string;
	top?: boolean;
}
```

Create `TimelineGridIntro.astro` with fixed current text unless props are needed:

```astro
<div class="timeline-grid-intro">
	<h3>SquiggleConf 2027</h3>
	<p>Boston, Massachusetts</p>
</div>
```

Move the corresponding CSS from `index.astro` into each component.

- [ ] **Step 3: Create `TimelineHeroImage.astro`**

Create a small wrapper for single event hero images:

```astro
---
import { Image } from "astro:assets";
import type { ImageMetadata } from "astro";

interface Props {
	alt: string;
	class?: string;
	pinned?: boolean;
	shape?: "circle" | "wide";
	src: ImageMetadata;
}

const {
	alt,
	class: className,
	pinned = false,
	shape = "wide",
	src,
} = Astro.props;
---

<div
	class:list={[
		"event-hero-image",
		shape === "wide" && "event-hero-image-wide",
		shape === "circle" && "event-hero-image-circle",
		pinned && "event-hero-image-pinned",
		className,
	]}
>
	<Image alt={alt} src={src} loading="lazy" />
</div>
```

Move `.event-body`, `.event-hero-image*`, and related image object-fit styles into this component or keep `.event-body` in `TimelineEntry` if it remains a layout wrapper.

- [ ] **Step 4: Replace timeline chrome in `index.astro`**

Replace repeated root structures with components while preserving direct grid children.

Examples:

```astro
<TimelineDayCap day="Thursday" date="May 6th" top />
<TimelineGridIntro />
<TimelineVenueMarker last venue={venues.nedDevines} />
<TimelineRailTime bottom time="6pm" />
<TimelineEntry entry={timelineEntries.launch} venues={venues}>
	<!-- Keep the current launch party body children here. -->
</TimelineEntry>
```

For entries with variant classes, pass the current class through:

```astro
<TimelineEntry
	class="timeline-content-funrun"
	entry={timelineEntries["fun-run"]}
	venues={venues}
/>
```

Use the `timelineEntries` object exported from `~/components/home/data`.
Do not create a second entry data object in `index.astro`.

- [ ] **Step 5: Remove moved timeline chrome CSS from `index.astro`**

Remove only CSS that now lives in extracted timeline chrome components.
Keep section-level variables, fish, postcard, and any not-yet-extracted layout rules until Task 6.

- [ ] **Step 6: Verify direct grid layout**

Run:

```bash
pnpm check
pnpm build
```

Then inspect the generated homepage manually in a browser.
Confirm venue markers, rails, day caps, and timeline entries are still in the expected grid positions.

- [ ] **Step 7: Commit the timeline chrome checkpoint**

Run:

```bash
git add src/components/home src/pages/index.astro
git commit -m "Extract homepage timeline chrome"
```

Use `--no-gpg-sign` if the non-interactive environment cannot sign.

---

### Task 6: Extract postcard, fish, and schedule section behavior

**Files:**

- Create: `src/components/home/PostcardFlipCard.astro`
- Create: `src/components/home/PostcardIntro.astro`
- Create: `src/components/home/SwimmingFishLayer.astro`
- Create: `src/components/home/ScheduleTimeline.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create `PostcardFlipCard.astro`**

Move the current postcard flip markup and all `.postcard*` styles into `PostcardFlipCard.astro`.

Props:

```ts
interface Props {
	addressLines: readonly string[];
	backAlt: string;
	frontAlt: string;
	note: string;
}
```

Use `postcardFront` and `postcardBack` from `~/components/home/data`.
Preserve:

- `class="postcard-stack postcard-stack-flip"`
- inline sizing variables `--postcard-back-width: 21rem; --postcard-front-scale: 1.5;`
- `.postcard-flip-scene`
- `.postcard-flip-inner`
- front/back faces
- handwritten message and address
- `.postcard-note-back`
- desktop hover/focus flip
- mobile `[data-mobile-flipped="true"]` behavior
- reduced-motion behavior

- [ ] **Step 2: Create `PostcardIntro.astro`**

Create `PostcardIntro.astro` with the current heading, intro copy, and `<PostcardFlipCard />` composition.

Keep the current `<br />` in the intro paragraph.

- [ ] **Step 3: Create `SwimmingFishLayer.astro`**

Move the fish markup, fish imports through `timelineFish`, fish CSS, and fish scroll script into `SwimmingFishLayer.astro`.

Preserve:

- `.timeline-fish-layer`
- `.timeline-fish-shell`
- `.timeline-fish-shell-1` through `-5`
- `.timeline-fish-body`
- `.timeline-fish-image`
- CSS keyframes
- the exact `fishConfigs` values
- reduced-motion static fallback
- scroll/resize RAF throttling

The script may still query `.timeline-section` and `[data-timeline-entry="talks-morning"]`; those selectors are component contracts.

- [ ] **Step 4: Create `ScheduleTimeline.astro`**

Create a wrapper component that owns:

- `<section class="timeline-section" aria-label="Timeline preview">`
- `<SwimmingFishLayer />`
- `<PostcardIntro />`
- `<div class="timeline-grid">`
- the mobile active-card script
- the pointer glow script
- section-level CSS variables, dark-mode overrides, `.timeline-grid`, responsive section/grid rules, and reduced-motion baseline

Expose a default slot inside `.timeline-grid`:

```astro
<section class="timeline-section" aria-label="Timeline preview">
	<SwimmingFishLayer />
	<PostcardIntro />
	<div class="timeline-grid">
		<slot />
	</div>
</section>
```

- [ ] **Step 5: Replace the timeline section in `index.astro`**

Replace:

```astro
<section class="timeline-section" aria-label="Timeline preview">
	<!-- Current fish, postcard, and timeline grid markup before extraction. -->
</section>
```

with:

```astro
<ScheduleTimeline>
	<!-- Current direct timeline grid children after fish and postcard extraction. -->
</ScheduleTimeline>
```

The slot contents should be only the direct timeline grid children:

- `TimelineDayCap`
- `TimelineGridIntro`
- `TimelineVenueMarker`
- `TimelineRailTime`
- `TimelineEntry`
- direct empty cells where still required

- [ ] **Step 6: Remove moved CSS/script from `index.astro`**

Remove the remaining timeline section, postcard, fish, mobile active, pointer glow, and reduced-motion CSS/script from `index.astro` once owned by components.

After this step, `index.astro` should have little or no local `<style>` / `<script>` related to the homepage schedule.

- [ ] **Step 7: Verify schedule behavior extraction**

Run:

```bash
pnpm check
pnpm build
```

Expected: both exit 0.

Manual browser checks:

- postcard flips on desktop hover/focus
- postcard flips on mobile scroll threshold
- fish move on desktop scroll
- fish are hidden on mobile layout
- timeline cards glow on pointer movement on desktop
- mobile active-card state changes while scrolling
- reduced-motion disables animation/autoplay behavior where applicable

- [ ] **Step 8: Commit the section behavior checkpoint**

Run:

```bash
git add src/components/home src/pages/index.astro
git commit -m "Extract homepage schedule behaviors"
```

Use `--no-gpg-sign` if the non-interactive environment cannot sign.

---

### Task 7: Final cleanup and visual parity review

**Files:**

- Modify: `src/pages/index.astro`
- Modify: `src/components/home/*`

- [ ] **Step 1: Simplify `index.astro` composition**

Ensure `src/pages/index.astro` reads as the page composition layer:

```astro
<PageLayout
	description="A Boston conference for excellent web dev tooling."
	hideHeaderLinks={["about", "shop"]}
	hideHeaderLogo
>
	<HomePreviewBanner slot="pageTop" />
	<Hero tall>
		<HomeHeroLockup />
	</Hero>
	<DeepSeaSurface>
		<ScheduleTimeline>
			<!-- timeline grid children -->
		</ScheduleTimeline>
		<Registration />
	</DeepSeaSurface>
	<SponsorsAndPartners />
</PageLayout>
```

The timeline grid children can remain rich and explicit; do not hide important prose in data files.

- [ ] **Step 2: Remove unused imports and dead CSS**

Run:

```bash
pnpm lint
```

Expected: exit 0. If lint reports unused imports or selectors in touched files, remove the unused code and rerun `pnpm lint`.

- [ ] **Step 3: Dispatch a read-only visual parity subagent**

Dispatch a subagent with this prompt:

```text
Read-only review. Do not modify files.

Compare the current homepage extraction against the original source intent in src/pages/index.astro history and docs/superpowers/specs/2026-06-08-homepage-design-system-extraction-design.md. Focus on visual and interaction parity for the homepage only: hero, postcard, fish, timeline rails/venues, cards, collages, avatar stacks, lunch carousel, mobile active states, reduced motion, and dark mode.

Return a compact list of regressions or "no regressions found" with file/selector references. Do not propose unrelated refactors.
```

Review the subagent report before changing code.

- [ ] **Step 4: Run final verification**

Run:

```bash
pnpm check
pnpm build
pnpm lint
grep -R "loading=\"eager\"" -n src/components/home/Collage.astro
```

Expected:

- `pnpm check` exits 0.
- `pnpm build` exits 0.
- `pnpm lint` exits 0.
- `grep` prints no matches for `src/components/home/Collage.astro`.

- [ ] **Step 5: Manual browser verification**

Open the local dev server:

```bash
pnpm dev
```

Review `/` at desktop and mobile widths.
Verify:

- desktop hover/focus timeline card glow
- pointer-position glow movement
- desktop postcard hover/focus flip
- mobile postcard scroll flip
- fish desktop scroll choreography
- sticky venue markers and time rails
- lunch carousel dots, autoplay, pause/resume, and ARIA state
- standardized `Collage` layouts remain rich for duo, trio, feature-five, avatar-duo, and avatar-trio
- all `Collage` images are lazy loaded in rendered markup
- dark mode preserves logo and timeline colors
- reduced motion neutralizes animation/autoplay

- [ ] **Step 6: Commit final cleanup**

Run:

```bash
git add src/components/home src/pages/index.astro
git commit -m "Finish homepage design system extraction"
```

Use `--no-gpg-sign` if the non-interactive environment cannot sign.

---

## Final completion checklist

- [ ] `src/pages/index.astro` is primarily composition and rich timeline content.
- [ ] Homepage-local components live under `src/components/home/`.
- [ ] `Collage` supports current photo/avatar stacks and always lazy-loads its images.
- [ ] Timeline grid children remain direct grid children.
- [ ] Rich event prose remains Astro markup.
- [ ] `pnpm check`, `pnpm build`, and `pnpm lint` pass.
- [ ] Manual desktop/mobile interaction checks pass.
- [ ] Read-only subagent visual parity review has no unresolved regressions.
