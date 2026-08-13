import bigRav from "~/assets/2027/bigrav.webp";
import harborwalk from "~/assets/2027/boston-harborwalk.webp";
import duck1 from "~/assets/2027/duck-1.webp";
import duck2 from "~/assets/2027/duck-2.webp";
import funrun1 from "~/assets/2027/fun-run-1.webp";
import funrun2 from "~/assets/2027/fun-run-2.webp";
import lunchBerryTwist from "~/assets/2027/lunch-berry-twist.webp";
import lunchBostonChowda from "~/assets/2027/lunch-boston-chowda.webp";
import lunchRegina from "~/assets/2027/lunch-regina.webp";
import lunchSalad from "~/assets/2027/lunch-salad.webp";
import lunchWickedLobsta from "~/assets/2027/lunch-wicked-lobsta.webp";
import maddyMontaquila from "~/assets/2027/maddy.webp";
import milkcookies1 from "~/assets/2027/milkcookies-1.webp";
import milkcookies2 from "~/assets/2027/milkcookies-2.webp";
import milkcookies3 from "~/assets/2027/milkcookies-3.webp";
import placeholder1 from "~/assets/2027/placeholder-1.webp";
import placeholder2 from "~/assets/2027/placeholder-2.webp";
import placeholder3 from "~/assets/2027/placeholder-3.webp";
import placeholder4 from "~/assets/2027/placeholder-4.webp";
import placeholder5 from "~/assets/2027/placeholder-5.webp";
import placeholder6 from "~/assets/2027/placeholder-6.webp";
import placeholder7 from "~/assets/2027/placeholder-7.webp";
import postcardBack from "~/assets/2027/postcard-back.webp";
import postcardFront from "~/assets/2027/postcard-front.webp";
import rest1 from "~/assets/2027/rest-1.webp";
import simonsTheater from "~/assets/2027/simons-theater.webp";
import terminalShop from "~/assets/2027/terminal.shop.svg";
import urbanwild1 from "~/assets/2027/urbanwild-1.webp";
import urbanwild2 from "~/assets/2027/urbanwild-2.webp";
import urbanwild3 from "~/assets/2027/urbanwild-3.webp";
import urbanwild4 from "~/assets/2027/urbanwild-4.webp";
import urbanwild5 from "~/assets/2027/urbanwild-5.webp";
import urbanwildLogo from "~/assets/2027/urbanwild-logo.webp";
import dillonMulroy from "~/assets/avatars/dillon-mulroy.webp";
import thePrimeagen from "~/assets/avatars/theprimeagen.webp";
import tjDevries from "~/assets/avatars/tj-devries.webp";
import timelineFish1 from "~/assets/design/timeline-fish-1.svg?raw";
import timelineFish2 from "~/assets/design/timeline-fish-2.svg?raw";
import timelineFish3 from "~/assets/design/timeline-fish-3.svg?raw";
import timelineFish4 from "~/assets/design/timeline-fish-4.svg?raw";
import timelineFish5 from "~/assets/design/timeline-fish-5.svg?raw";
import networking from "~/assets/stills/attendees-networking.png";
import harbor from "~/assets/stills/boston-harbor.png";

import type {
	ExploreChoiceData,
	LunchSpotData,
	TalkCardData,
	TimelineEntryData,
	TimelineEntryId,
	VenueData,
	VenueId,
} from "./types";

const talksSessions = [
	{
		image: placeholder1,
		name: "To Be Announced",
		placeholder: true,
		qualification: "slipped and fell into developer tooling",
		title: "Bugs Hate This: One Simple Trick to make AI Less Sloppy",
	},
	{
		image: placeholder2,
		name: "Your Name Here",
		placeholder: true,
		qualification: "maintainer of a package in your lockfile",
		title: "The Package You've Never Heard Of That Runs Half the Internet",
	},
	{
		image: placeholder3,
		name: "Speaker Loading...",
		placeholder: true,
		qualification: "accidentally became a language designer",
		title: "One Small Syntax Change, One Giant Migration Guide",
	},
];

const lateTalksSessions = [
	{
		image: placeholder3,
		name: "Placeholder McPlaceholderface",
		placeholder: true,
		qualification: "TypeScript whisperer",
		title: "Why Is This Type Slow?",
	},
	{
		image: placeholder7,
		name: "Your Favorite Developer",
		placeholder: true,
		qualification: "local development maximalist",
		title: "The 42-Second Dev Loop",
	},
];

const afternoonTalksSessions = [
	{
		image: placeholder5,
		name: "Mysterious Industry Person",
		placeholder: true,
		qualification: "compiler engineer and standards enjoyer",
		title: "The Runtime Is Lying To You",
	},
	{
		image: placeholder6,
		name: "Anonymous Core Team Member",
		placeholder: true,
		qualification: "spends their days reading specification prose",
		title: "The Feature Everyone Uses Incorrectly",
	},
	{
		image: placeholder4,
		name: "Future Squiggle Speaker",
		placeholder: true,
		qualification: "creator of an unreasonable amount of tooling",
		title: "Making Developers 3% Faster at Enormous Personal Cost",
	},
];

const lunchSpotOptions = [
	{
		alt: "Boston & Maine Fish Company seafood plate",
		image: lunchBostonChowda,
		name: "Boston & Maine Fish Company",
		url: "https://faneuilhallmarketplace.com/go/boston-and-maine-fish-company",
	},
	{
		alt: "Regina Pizzeria pizza slices",
		image: lunchRegina,
		name: "Regina Pizzeria",
		url: "https://faneuilhallmarketplace.com/go/regina-pizzeria",
	},
	{
		alt: "Wicked Lobsta lobster roll",
		image: lunchWickedLobsta,
		name: "Wicked Lobsta",
		url: "https://faneuilhallmarketplace.com/go/wicked-lobsta",
	},
	{
		alt: "The Berry Twist dessert cup",
		image: lunchBerryTwist,
		name: "The Berry Twist",
		url: "https://faneuilhallmarketplace.com/go/the-berry-twist",
	},
	{
		alt: "Green Organic Bowl salad",
		image: lunchSalad,
		name: "Green Organic Bowl",
		url: "https://faneuilhallmarketplace.com/go/green-organic-bowl",
	},
];

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

export const venues = {
	aquarium: {
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

export const timelineMCs = [
	{
		image: maddyMontaquila,
		name: "Maddy Montaquila",
		qualification: "product lead for Aspire at Microsoft",
	},
	{
		image: tjDevries,
		name: "TJ DeVries",
		qualification: "neovim core team",
	},
];

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
		variant: "podcast",
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
	"podcast-live": {
		id: "podcast-live",
		location: { venueId: "urbanWild" },
		timeLabel: "6pm",
		timeMode: "point",
		title: "Live Podcast Recording",
		variant: "podcast",
	},
	"simons-imax-theater": {
		id: "simons-imax-theater",
		location: { venueId: "aquarium" },
		timeLabel: "8am",
		timeMode: "point",
		title: "Talks in an IMAX Theater",
		variant: "mcs",
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

export {
	bigRav,
	dillonMulroy,
	duck1,
	duck2,
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
	simonsTheater,
	terminalShop,
	thePrimeagen,
	urbanwild1,
	urbanwild2,
	urbanwild3,
	urbanwild4,
	urbanwild5,
	urbanwildLogo,
};
