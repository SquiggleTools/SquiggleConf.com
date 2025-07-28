import _ from "lodash";

import bloombergBlack from "~/assets/logos/bloomberg-black.svg";
import bloombergWhite from "~/assets/logos/bloomberg-white.svg";
import datastaxBlack from "~/assets/logos/datastax-black.svg";
import datastaxWhite from "~/assets/logos/datastax-white.svg";
import igaliaBlack from "~/assets/logos/igalia-black.svg";
import igaliaWhite from "~/assets/logos/igalia-white.svg";
import inngestBlack from "~/assets/logos/inngest-black.svg";
import inngest from "~/assets/logos/inngest.svg";
import nxDarkBlue from "~/assets/logos/nx-dark-blue.svg";
import nxWhite from "~/assets/logos/nx-white.svg";
import openjsFoundationColor from "~/assets/logos/openjs-foundation-color.svg";
import openjsFoundationLight from "~/assets/logos/openjs-foundation-light.svg";
import prismaBlack from "~/assets/logos/prisma-black.svg";
import prismaWhite from "~/assets/logos/prisma-white.svg";

export const sponsorsBySlug = {
	bloomberg: {
		href: "https://www.bloomberg.com/company/values/tech-at-bloomberg/javascript?utm_source=squiggleconf",
		logos: {
			dark: bloombergWhite,
			light: bloombergBlack,
		},
		placement: "first",
		title: "Bloomberg",
	},
	datastax: {
		href: "https://www.datastax.com?utm_source=squiggleconf",
		logos: {
			dark: datastaxWhite,
			light: datastaxBlack,
		},
		placement: "first",
		title: "Datastax",
	},
	igalia: {
		href: "https://igalia.com?utm_source=squiggleconf",
		logos: {
			dark: igaliaWhite,
			light: igaliaBlack,
		},
		placement: "second",
		title: "Igalia",
	},
	inngest: {
		href: "https://inngest.com?utm_source=squiggleconf",
		logos: {
			dark: inngest,
			light: inngestBlack,
		},
		placement: "first",
		title: "Inngest",
	},
	nx: {
		href: "https://nx.dev?utm_source=squiggleconf",
		logos: {
			dark: nxWhite,
			light: nxDarkBlue,
		},
		placement: "second",
		title: "OpenJS Foundation",
	},
	"openjs-foundation": {
		href: "https://openjsf.org?utm_source=squiggleconf",
		logos: {
			dark: openjsFoundationLight,
			light: openjsFoundationColor,
		},
		placement: "first",
		title: "OpenJS Foundation",
	},
	prisma: {
		href: "https://www.prisma.io/?utm_source=squiggleconf",
		logos: {
			dark: prismaWhite,
			light: prismaBlack,
		},
		placement: "first",
		title: "Prisma",
	},
};

// TODO: use Object.groupBy once Vercel supports a newer Node.js version
export const sponsorsByPlacement = _.groupBy(
	Object.entries(sponsorsBySlug).map(([slug, sponsor]) => ({
		slug,
		...sponsor,
	})),
	(sponsor) => sponsor.placement,
);
