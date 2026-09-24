export interface Article {
	description: string;
	listTitle?: string;
	title: string;
}

export const articles = {
	faqs: {
		description:
			"Common questions and answers around attending, speaking at, and sponsoring SquiggleConf.",
		listTitle: "FAQs",
		title: "Frequently Asked Questions",
	},
	"media-guide": {
		description:
			"Brand asset downloads, usage guidelines, and pitch templates to help you share the word about SquiggleConf.",
		title: "Media Guide",
	},
	"speaker-guide": {
		description:
			"All the information you'd need to know as a SquiggleConf speaker.",
		title: "Speaker Guide",
	},
	"sponsor-guide": {
		description:
			"All the information you'd need to know as a SquiggleConf sponsor.",
		title: "Sponsor Guide",
	},
	travel: {
		description:
			"How to get to and around Boston when you’re attending SquiggleConf.",
		title: "Travel",
	},
	"volunteer-guide": {
		description:
			"All the information you'd need to know as a SquiggleConf volunteer.",
		title: "Volunteer Guide",
	},
	// Retrospectives are listed after evergreen articles
	"2024-financial-review": {
		description:
			"What it's like to start a new in-person tech conference, from a financial perspective.",
		title: "SquiggleConf 2024 Financial Review",
	},
} satisfies Record<string, Article>;
