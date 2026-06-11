# Homepage Design System Extraction Design

Date: 2026-06-08

## Summary

Extract the rich homepage currently implemented in `src/pages/index.astro` into a homepage-local design system.
The extraction should preserve the current page almost exactly: the visual density, motion, collages, hover states, mobile scroll states, postcard flip, fish choreography, lunch carousel, venue rail, dark-mode behavior, and reduced-motion behavior are all part of the product.

This is an Option B extraction: components are specific to this homepage for now, but their boundaries should make a later Option C pass toward more general primitives straightforward.

## Goals

- Reduce `src/pages/index.astro` from a large mixed markup/CSS/script file into a page orchestration layer.
- Preserve the existing homepage features and visual richness.
- Extract repeated structure into homepage-local Astro components.
- Introduce a universal homepage-local `Collage` component that supports all current overlapping photo/avatar groups.
- Keep rich event prose as Astro markup so the page remains handcrafted.
- Use stable semantic data and IDs so a future generic design-system pass can evolve from this work.
- Use subagents for independent implementation or review tasks, with one orchestrator integrating the final result.

## Non-goals

- Do not redesign the homepage.
- Do not build a site-wide generic design system yet.
- Do not flatten the whole timeline into a fully data-driven CMS-style model.
- Do not extract generic `Card`, `Avatar`, `Carousel`, `Timeline`, `Button`, or `Media` primitives yet.
- Do not refactor unrelated pages or existing site components outside the homepage flow.

## Architecture

Use a homepage-local component namespace such as `src/components/home/` or `src/components/2027/`.

```diagram
╭──────────────────────────────────────────────╮
│ src/pages/index.astro                         │
│ page composition, route metadata, top shell    │
╰──────────────────────┬───────────────────────╯
                       │
╭──────────────────────▼───────────────────────╮
│ homepage-local design system                  │
│ rich SquiggleConf-specific components          │
╰──────────────────────┬───────────────────────╯
                       │
╭──────────────────────▼───────────────────────╮
│ future generic primitive layer                 │
│ Card / Media / Avatar / Carousel / Motion      │
╰──────────────────────────────────────────────╯
```

`index.astro` should remain responsible for page composition:

- `PageLayout` metadata and top-level slots
- preview banner if still temporary
- hero placement
- deep-sea schedule placement
- registration and sponsors placement

The homepage-local components should own markup, styling, data contracts, and scripts for the extracted feature areas.

## Component inventory

### Top-level homepage components

- `HomeHeroLockup`
  - Owns the SquiggleConf SVG logo fill replacement and subtitle.
  - Preserves the light/dark logo fill behavior.

- `HomepageDeepSeaSchedule` or `ScheduleSection`
  - Owns the current deep-sea timeline area inside `DeepSeaSurface`.
  - Composes the fish layer, postcard intro, timeline grid, and timeline scripts.

- `PostcardIntro`
  - Owns the intro heading and paragraph.
  - Composes `PostcardFlipCard`.

- `PostcardFlipCard`
  - Owns the front/back postcard image markup, handwritten overlay, address, note, desktop hover flip, mobile scroll flip state hook, idle wiggle, and reduced-motion behavior.

- `SwimmingFishLayer`
  - Owns fish image rendering, per-fish shell classes, CSS swim keyframes, scroll choreography, and reduced-motion static fallback.

### Timeline components

- `ScheduleTimeline`
  - Owns the timeline section, grid wrapper, theme variables, dark-mode variable overrides, responsive breakpoint, and cross-entry behavior scripts.

- `TimelineEntry`
  - Owns repeated card chrome: heading, time, optional subtitle, mobile metadata, `.timeline-content` state hooks, hover/focus glow, mobile active state, and body slot.
  - Must render its root element directly as a `.timeline-grid` child.

- `TimelineVenueMarker`
  - Owns sticky frosted venue blocks, stacked map links, row-span variants, `@` decoration, and optional decoration slot for the turtle.
  - Must render its root element directly as a `.timeline-grid` child.

- `TimelineRailTime`
  - Owns desktop rail/time blocks and row spans.
  - Must render its root element directly as a `.timeline-grid` child.

- `TimelineDayCap`
  - Owns Thursday/Friday day caps.
  - Must render its root element directly as a `.timeline-grid` child.

- `TimelineGridIntro`
  - Owns the “SquiggleConf 2027 / Boston, Massachusetts” intro cell.

- `TimelineCopy`
  - Small wrapper that preserves `.timeline-copy` semantics while keeping prose in slots.

### Event body components

- `Collage`
  - Universal homepage-local overlapping media component for photo and avatar groups.

- `TalkList` and `TalkCard`
  - Own speaker talk cards, placeholder overlays, image handling, and talk metadata.

- `HostList` and `PersonCard`
  - Own MC/person cards.

- `LunchCarousel`
  - Own lunch slides, dots, captions, ARIA state, lazy image loading, autoplay, pause/resume, and reduced-motion behavior.

- `ExploreChoices` and `ExploreChoiceCard`
  - Own choice-card layout, fake radio affordance, hover state, badge, image, and copy.

- `EventMediaBlock` and `TimelineHeroImage`
  - Own single-image event media layouts such as IMAX, Urban Wild, and Big Rav.

- `TerminalShopButton`
  - Owns the branded check-in CTA.

## Universal `Collage` component

`Collage` should be homepage-local now and future-friendly for a later generic primitive pass.

### API

```ts
import type { ImageMetadata } from "astro";

type CollagePhoto = {
	src: ImageMetadata;
	alt: string;
	objectPosition?: string;
	decorative?: boolean;
};

type CollageLayout =
	| "auto"
	| "duo"
	| "trio"
	| "feature-five"
	| "avatar-duo"
	| "avatar-trio";

type CollageShape = "photo" | "avatar";

type CollageProps = {
	photos: CollagePhoto[];
	ariaLabel?: string;
	layout?: CollageLayout;
	shape?: CollageShape;
	class?: string;
	decorative?: boolean;
};
```

`Collage` images should always render with `loading="lazy"`; loading should not be configurable through the public API.

### Layouts

- `duo`
  - Used by Fun Run desktop and mobile.
  - Two overlapping, rotated photo cards.
  - Preserves special per-photo hover/mobile-active offsets.

- `trio`
  - Used by Launch Party and Milk & Cookies.
  - One standardized three-photo fan/stagger layout.
  - Instance-specific differences should be focal points, wrapper placement, and density, not separate components.

- `feature-five`
  - Used by After Party.
  - One dominant lead image plus four supporting overlapping images.

- `avatar-duo`
  - Used by Fireside Chat.
  - Circular primary avatar plus supporting corner avatar.

- `avatar-trio`
  - Used by Syntax.fm Live.
  - Circular primary avatar plus two supporting avatars.

`layout="auto"` should derive a default from `photos.length` and `shape`, with explicit overrides available for clarity.

### Ownership

`Collage` owns:

- overlapping item geometry for supported layouts
- white image frame, border, shadow, radius, and overflow styles
- circular avatar/photo shape variants
- `object-fit: cover` and per-photo `objectPosition`
- hover/focus image lift when inside `.timeline-content`
- mobile-active image lift via `.timeline-content[data-mobile-active="true"]`
- reduced-motion transition guards
- accessibility grouping with `role="group"` and `aria-label` when useful

`Collage` does not own:

- timeline card chrome
- section scripts
- lunch carousel behavior
- postcard flip behavior
- fish animation
- event prose or headings

## Data and content ownership

Introduce homepage-local data/types, not global site data.

Recommended files:

```text
src/components/home/data.ts
src/components/home/types.ts
```

Structured repeat data can move to `home/data.ts`:

- venues and map links
- talks grouped by block
- MCs
- lunch spots
- explore choices
- collage photo arrays
- postcard media
- fish image array

Rich content should stay as Astro markup and slots:

- intro paragraph with the intentional line break
- postcard handwritten message and address rhythm
- event prose with inline links, `<strong>`, and styled spans
- terminal.shop CTA placement
- lunch prose around generated spot links
- Syntax.fm and fireside topic text
- Big Rav copy with inline link and featuring note

Use stable semantic IDs and variants:

- `TimelineEntryId`
- `VenueId`
- `TalkBlockId`
- `CollageLayout`
- entry variants such as `"talks"`, `"lunch"`, `"explore"`, `"syntax"`, and `"fireside"`

Data should express semantics, not raw CSS classes.
Components map semantic variants to classes internally.

## Behavior and script ownership

Split the current inline page script into homepage-owned behavior modules/components.

### `SwimmingFishLayer` script

- Scroll-position fish choreography.
- Per-fish timing, scale, bob, drift, and rotation config.
- RAF throttling on scroll.
- Resize updates.
- Reduced-motion static fish fallback.
- Root `data-timeline-scrolling` behavior if still needed by styles.

### `LunchCarousel` script

- Initializes active slide 0.
- Maintains `--lunch-carousel-index`.
- Updates slide `aria-hidden` and dot `aria-pressed`.
- Handles dot clicks.
- Auto-advances every 3400ms.
- Pauses on pointer hover and focus.
- Resumes on pointer leave and focus leaving the carousel.
- Does not auto-advance when `prefers-reduced-motion: reduce` matches or fewer than two slides exist.

### `ScheduleTimeline` mobile state script

- Tracks timeline card headings below the mobile breakpoint.
- Sets `data-mobile-active="true"` on the current entry while scrolling.
- Sets `data-mobile-flipped="true"` on the postcard when the postcard midpoint crosses the mobile activation threshold.
- Clears mobile state when returning to desktop.

### `TimelineEntry` or `ScheduleTimeline` pointer glow script

- Updates `--timeline-card-pointer-x` and `--timeline-card-pointer-y` on pointer movement.
- Resets the variables on pointer leave.
- Does nothing below the mobile breakpoint.

## Styling ownership

- `ScheduleTimeline` owns timeline theme variables, dark-mode overrides, grid layout, responsive breakpoint, and reduced-motion baseline.
- `TimelineEntry` owns the `.timeline-content` contract: card shell, hover/focus movement, pointer glow pseudo-elements, heading/subtitle/copy transitions, and mobile active-card styling.
- `Collage` owns shared media frame and overlap layout styling.
- `PostcardFlipCard`, `SwimmingFishLayer`, `LunchCarousel`, `ExploreChoiceCard`, `TalkCard`, `PersonCard`, and `TerminalShopButton` own their local styles.

When a child component must respond to parent state such as `.timeline-content:hover`, `.timeline-content:focus-within`, or `[data-mobile-active="true"]`, document that selector as an explicit component contract.

Preserve the CSS/JS breakpoint pairing:

- CSS mobile breakpoint: `width < 900px`
- JS mobile query: `(max-width: 899px)`

If one changes, both must change together.

## Visual parity requirements

The extracted implementation must preserve:

- Desktop hover/focus timeline card glow and image lift.
- Pointer-position radial border glow.
- Mobile scroll-activated card highlight.
- Desktop postcard hover/focus flip.
- Mobile postcard scroll flip.
- Swimming fish desktop scroll choreography.
- Reduced-motion fish static fallback.
- Sticky venue markers and time rails.
- Lunch carousel controls, autoplay, ARIA state, pause/resume, and reduced-motion behavior.
- Standardized `Collage` layouts for all overlapping photo/avatar groups.
- Dark-mode logo and timeline variable behavior.
- Responsive single-column timeline below 900px.
- Existing accessibility details, including meaningful alt text, decorative empty alt text, ARIA labels, and hidden duplicate mobile media where necessary.
- Lazy loading for all `Collage` images.

## Subagent use

Use subagents for independent work during implementation and review, but keep one orchestrator responsible for final integration.

Good subagent splits:

- Extract and review `Collage` layouts and CSS contracts.
- Extract and review timeline data/types.
- Extract and review behavior scripts.
- Perform read-only visual parity review against `index.astro` after integration.

Avoid concurrent subagent edits to the same files.
If implementation subagents are used, assign disjoint files or use read-only review subagents after each integration checkpoint.

## Verification plan

After implementation:

1. Run the narrowest available Astro build/type check for the site.
2. Review the homepage manually at desktop and mobile widths.
3. Check desktop interactions:
   - timeline card hover/focus glow
   - pointer-position glow movement
   - postcard hover/focus flip
   - fish movement on scroll
   - lunch carousel dots and pause/resume
4. Check mobile interactions:
   - active card changes while scrolling
   - postcard flips after scroll threshold
   - hover effects remain neutralized on touch-style layout
   - Fun Run collage placement remains rich and readable
5. Check accessibility behavior:
   - lunch slide and dot ARIA states update
   - decorative images remain hidden where appropriate
   - meaningful images keep meaningful alt text
6. Check preferences and themes:
   - reduced motion disables animations/autoplay as designed
   - dark mode preserves logo and timeline color variables
7. Confirm all `Collage` internal images render with `loading="lazy"`.

## Acceptance criteria

- `src/pages/index.astro` becomes a readable composition layer rather than the owner of all homepage markup, CSS, and scripts.
- The homepage remains visually and behaviorally equivalent except for approved standardization of same-count collage layouts.
- `Collage` supports current photo and avatar stacks with lazy-loaded images.
- Timeline components preserve direct grid-child layout behavior.
- Rich event prose remains visible and editable as Astro markup.
- No unrelated pages/components are redesigned or refactored.
