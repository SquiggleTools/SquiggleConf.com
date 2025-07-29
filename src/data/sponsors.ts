import _ from "lodash";

import bloombergBlack from "~/assets/logos/bloomberg-black.svg";
import bloombergWhite from "~/assets/logos/bloomberg-white.svg";
import elasticBlack from "~/assets/logos/elastic-black.svg";
import elasticWhite from "~/assets/logos/elastic-white.svg";
import igaliaBlack from "~/assets/logos/igalia-black.svg";
import igaliaWhite from "~/assets/logos/igalia-white.svg";
import mintlifyBlack from "~/assets/logos/mintlify-black.svg";
import mintlifyWhite from "~/assets/logos/mintlify-white.svg";
import progressGray from "~/assets/logos/progress-gray.svg";
import progressWhite from "~/assets/logos/progress-white.svg";
import voidZeroBlack from "~/assets/logos/voidzero-black.svg";
import voidZeroWhite from "~/assets/logos/voidzero-white.svg";

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
	elastic: {
		href: "https://elastic.co?utm_source=squiggleconf",
		logos: {
			dark: elasticBlack,
			light: elasticWhite,
		},
		placement: "first",
		title: "Elastic",
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
	mintlify: {
		href: "https://mintlify.com?utm_source=squiggleconf",
		logos: {
			dark: mintlifyWhite,
			light: mintlifyBlack,
		},
		placement: "first",
		title: "Mintlify",
	},
	progress: {
		href: "https://progress.com?utm_source=squiggleconf",
		logos: {
			dark: progressWhite,
			light: progressGray,
		},
		placement: "first",
		title: "Progress",
	},
	voidZero: {
		href: "https://voidzero.dev?utm_source=squiggleconf",
		logos: {
			dark: voidZeroWhite,
			light: voidZeroBlack,
		},
		placement: "second",
		title: "VoidZero",
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
