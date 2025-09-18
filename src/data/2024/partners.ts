import afhBlack from "~/assets/logos/afh-black.svg";
import afhWhite from "~/assets/logos/afh-white.svg";
import conTejasCode from "~/assets/logos/contejas-code.png";
import hackDiversityBlue from "~/assets/logos/hack-diversity-blue.svg";
import hackDiversityWhite from "~/assets/logos/hack-diversity-white.svg";
import jsParty from "~/assets/logos/js-party.png";
import reactAfricaDark from "~/assets/logos/react-africa-dark.png";
import reactAfricaLight from "~/assets/logos/react-africa-light.webp";
import thisWeekInReactDarkMode from "~/assets/logos/this-week-in-react-dark-mode.png";
import thisWeekInReactLightMode from "~/assets/logos/this-week-in-react-light-mode.png";

export const partnersBySlug = {
	afh: {
		href: "https://www.afhboston.org/?utm_source=squiggleconf",
		logos: {
			dark: afhWhite,
			light: afhBlack,
		},
		title: "Artists for Humanity",
	},
	contejas: {
		href: "https://tej.as/#podcast",
		logos: {
			dark: conTejasCode,
			light: conTejasCode,
		},
		title: "ConTejas Code Podcast",
	},
	hackDiversity: {
		href: "https://www.hackdiversity.com/?utm_source=squiggleconf",
		logos: {
			dark: hackDiversityWhite,
			light: hackDiversityBlue,
		},
		title: "Hack.Diversity",
	},
	jsparty: {
		href: "https://changelog.com/jsparty?utm_source=squiggleconf",
		logos: {
			dark: jsParty,
			light: jsParty,
		},
		title: "JS Party",
	},
	reactAfrica: {
		href: "https://react-africa.com/?utm_source=squiggleconf",
		logos: {
			dark: reactAfricaLight,
			light: reactAfricaDark,
		},
		title: "React Africa",
	},
	twir: {
		href: "https://thisweekinreact.com?utm_source=squiggleconf",
		logos: {
			dark: thisWeekInReactDarkMode,
			light: thisWeekInReactLightMode,
		},
		title: "This Week In React",
	},
};
