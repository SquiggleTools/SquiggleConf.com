import afhBlack from "~/assets/logos/afh-black.svg";
import afhWhite from "~/assets/logos/afh-white.svg";
import bostonTSClubDark from "~/assets/logos/boston-ts-club-full-dark.svg";
import bostonTSClubLight from "~/assets/logos/boston-ts-club-full-light.svg";
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
		title: "Artists for Humanity",
	},
	bostonTsClub: {
		href: "https://bostonts.club?utm_source=squiggleconf",
		logos: {
			dark: bostonTSClubDark,
			light: bostonTSClubLight,
		},
		title: "Boston TS Club",
	},
	magnoliaConf: {
		href: "https://2025.magnoliaconf.com?utm_source=squiggleconf",
		logos: {
			dark: magnoliaConfWhite,
			light: magnoliaConfColored,
		},
		title: "Magnolia JS Conf",
	},
	michiganTypeScript: {
		href: "https://www.youtube.com/@MichiganTypeScript?utm_source=squiggleconf",
		logos: {
			dark: michiganTypeScript,
			light: michiganTypeScript,
		},
		title: "Michigan TypeScript",
	},
};
