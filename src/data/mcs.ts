import { ImageMetadata } from "astro";

import fatimaSarahKhalid from "~/assets/avatars/fatima-sarah-khalid.jpg";
import nickNisi from "~/assets/avatars/nick-nisi.jpg";

interface MCSummary {
	image: ImageMetadata;
	name: string;
}

export const mcs: MCSummary[] = [
	{
		image: fatimaSarahKhalid,
		name: "Fatima Sarah Khalid",
	},
	{
		image: nickNisi,
		name: "Nick Nisi",
	},
];
