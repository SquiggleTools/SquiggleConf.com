import fredKSchott from "~/assets/avatars/fred-k-schott.webp";
import kadiKraman from "~/assets/avatars/kadi-kraman.webp";
import maddyMontaquila from "~/assets/avatars/maddy-montaquila.webp";
import nickNisi from "~/assets/avatars/nick-nisi.webp";
import thePrimeagen from "~/assets/avatars/theprimeagen.webp";
import tjDevries from "~/assets/avatars/tj-devries.webp";
import syntax from "~/assets/logos/syntax.svg";

import type { PersonCardData } from "../types";

export interface CfpPersonData extends PersonCardData {
	detail?: string;
}

export const cfpLaunchSpeakers = [
	{
		detail: "launch speaker",
		image: fredKSchott,
		name: "Fred K. Schott",
		qualification: "co-creator of Astro",
	},
	{
		detail: "launch speaker",
		image: kadiKraman,
		name: "Kadi Kraman",
		qualification: "engineer at Expo",
	},
	{
		detail: "launch speaker",
		image: nickNisi,
		name: "Nick Nisi",
		qualification: "AI Dx at WorkOS",
	},
] satisfies readonly CfpPersonData[];

export const cfpHosts = [
	{
		image: thePrimeagen,
		name: "ThePrimeagen",
		qualification: "live podcast recording",
	},
	{
		image: syntax,
		name: "Syntax.fm",
		qualification: "live podcast recording",
	},
	{
		detail: "MC",
		image: tjDevries,
		name: "TJ DeVries",
		qualification: "neovim core team",
	},
	{
		detail: "MC",
		image: maddyMontaquila,
		name: "Maddy Montaquila",
		qualification: "product lead for Aspire",
	},
] satisfies readonly CfpPersonData[];
