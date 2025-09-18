import * as notionData from "./notion-data.js";

type TalkSlug = keyof typeof notionData.talksBySlug;

const talksToExclude: TalkSlug[] = [];

const sortOrder: TalkSlug[] = [
	// Full
	"talk-robby-russell",
	"talk-aakansha-doshi",
	"talk-dan-vanderkam",
	"talk-don-isaac",
	"talk-jess-lin",
	"talk-loris-cro",
	"talk-rick-viscomi",
	"talk-rizel-scarlett",
	"talk-titian-cernicova-dragomir",
	// Lightning
	"talk-rachel-nabors",
	"talk-chris-griffing",
	"talk-laurynas-keturakis",
	"talk-corina-murg",
	"talk-yagiz-nizipli",
	// Workshop
	"workshop-katerina-and-max",
	"workshop-dan-and-aaron",
];

// sort by sortOrder
export const talks = Object.values(notionData.talksBySlug)
	.filter((t) => !talksToExclude.includes(t.slug))
	.sort((a, b) => {
		const aIndex = sortOrder.indexOf(a.slug);
		const bIndex = sortOrder.indexOf(b.slug);
		return aIndex - bIndex;
	});
