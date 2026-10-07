import fredKSchott from "~/assets/avatars/fred-k-schott.webp";
import kadiKraman from "~/assets/avatars/kadi-kraman.webp";
import maddyMontaquila from "~/assets/avatars/maddy-montaquila.webp";
import nickNisi from "~/assets/avatars/nick-nisi.webp";
import thePrimeagen from "~/assets/avatars/theprimeagen.webp";
import tjDevries from "~/assets/avatars/tj-devries.webp";
import syntax from "~/assets/logos/syntax.svg";

import type { PersonCardData } from "../types";

export const cfpLaunchSpeakers = [
	{
		image: fredKSchott,
		name: "Fred K. Schott",
		qualification: "co-creator of Astro",
	},
	{
		image: kadiKraman,
		name: "Kadi Kraman",
		qualification: "engineer at Expo",
	},
	{
		image: nickNisi,
		name: "Nick Nisi",
		qualification: "AI Dx at WorkOS",
	},
] satisfies readonly PersonCardData[];

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
		image: tjDevries,
		name: "TJ DeVries",
		qualification: "MC · neovim core team",
	},
	{
		image: maddyMontaquila,
		name: "Maddy Montaquila",
		qualification: "MC · product lead for Aspire",
	},
] satisfies readonly PersonCardData[];
