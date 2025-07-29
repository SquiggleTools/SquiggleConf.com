import _ from "lodash";

import afhBlack from "~/assets/logos/afh-black.svg";
import afhWhite from "~/assets/logos/afh-white.svg";
import bostonTSClubDark from "~/assets/logos/boston-ts-club-full-dark.svg";
import bostonTSClubLight from "~/assets/logos/boston-ts-club-full-light.svg";
import jsheroesDarkMode from "~/assets/logos/jsheroes-logo-dark.svg";
import jsheroesLightMode from "~/assets/logos/jsheroes-logo-light.svg";
import magnoliaConfColored from "~/assets/logos/magnoliaconf-colored.svg";
import magnoliaConfWhite from "~/assets/logos/magnoliaconf-white.svg";
import michiganTypeScript from "~/assets/logos/michigan-typescript.png";

export const partnersBySlug = {
	afh: {
		href: "https://www.afhboston.org/?utm_source=squiggleconf",
		logos: {
			dark: afhWhite,
			light: afhBlack,
		},
		placement: 2,
		title: "Artists for Humanity",
	},
	bostonTsClub: {
		href: "https://bostonts.club?utm_source=squiggleconf",
		logos: {
			dark: bostonTSClubDark,
			light: bostonTSClubLight,
		},
		placement: 0,
		title: "Boston TS Club",
	},
	jsheroes: {
		href: "https://jsheroes.io?utm_source=squiggleconf",
		logos: {
			dark: jsheroesDarkMode,
			light: jsheroesLightMode,
		},
		placement: 1,
		title: "JSHeroes",
	},
	magnoliaConf: {
		href: "https://2025.magnoliaconf.com?utm_source=squiggleconf",
		logos: {
			dark: magnoliaConfWhite,
			light: magnoliaConfColored,
		},
		placement: 1,
		title: "Magnolia JS Conf",
	},
	michiganTypeScript: {
		href: "https://www.youtube.com/@MichiganTypeScript?utm_source=squiggleconf",
		logos: {
			dark: michiganTypeScript,
			light: michiganTypeScript,
		},
		placement: 0,
		title: "Michigan TypeScript",
	},
};

// TODO: use Object.groupBy once Vercel supports a newer Node.js version
export const partnersByPlacement = _.groupBy(
	Object.entries(partnersBySlug).map(([slug, partner]) => ({
		slug,
		...partner,
	})),
	(partner) => partner.placement,
);
