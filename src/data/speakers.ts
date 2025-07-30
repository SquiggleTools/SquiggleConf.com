import { ImageMetadata } from "astro";

import alexanderLichter from "~/assets/avatars/alexander-lichter.jpg";
import amyDutton from "~/assets/avatars/amy-dutton.jpg";
import anthonyFu from "~/assets/avatars/anthony-fu.jpg";
import davidSherret from "~/assets/avatars/david-sherret.jpg";
import dominicNguyen from "~/assets/avatars/dominic-nguyen.jpg";
import dylanGoings from "~/assets/avatars/dylan-goings.png";
import giacomoCavalieri from "~/assets/avatars/giacomo-cavalieri.jpg";
import jakeBailey from "~/assets/avatars/jake-bailey.jpg";
import jessicaGarson from "~/assets/avatars/jessica-garson.jpg";
import maddyMontaquila from "~/assets/avatars/maddy-montaquila.png";
import mattiaManzati from "~/assets/avatars/mattia-manzati.jpg";
import michelleBakels from "~/assets/avatars/michelle-bakels.jpg";
import nicoloRibaudo from "~/assets/avatars/nicolo-ribaudo.jpg";
import oliverDunk from "~/assets/avatars/oliver-dunk.png";
import oliverMedhurst from "~/assets/avatars/oliver-medhurst.jpg";
import peteGonzalez from "~/assets/avatars/pete-gonzalez.jpg";
import shelleyVohr from "~/assets/avatars/shelley-vohr.jpg";
import tJDeVries from "~/assets/avatars/tj-devries.jpg";

// TODO: Source this dynamically using the scripts repo

export interface SpeakerInfo {
	biography: string;
	image: ImageMetadata;
	links: SpeakerLinks;
	name: string;
	qualification: string;
	slug: string;
}

export interface SpeakerLinks {
	bluesky?: string;
	github?: string;
	gitlab?: string;
	linkedin?: string;
	mastodon?: string;
	medium?: string;
	twitch?: string;
	website?: string;
	x?: string;
	youtube?: string;
}

export const speakersBySlug = {
	"alexander-lichter": {
		biography:
			"Hey! I am Alex, a developer relations engineer at VoidZero. I'm passionate about TypeScript, Vite, and the wonderful open source communities around Vue. I'm on the Nuxt team and have spent a good amount of time as a web engineering consultant.",
		image: alexanderLichter,
		links: {
			bluesky: "https://bsky.app/profile/thealexlichter.com",
			github: "https://github.com/TheAlexLichter",
			linkedin: "https://www.linkedin.com/in/alexanderlichter",
			x: "https://x.com/TheAlexLichter",
			youtube: "https://www.youtube.com/@TheAlexLichter",
		},
		name: "Alexander Lichter",
		qualification: "developer on Nuxt and void(0) devrel engineer",
		slug: "alexander-lichter",
	},
	"amy-dutton": {
		biography:
			"A lead maintainer on the RedwoodJS core team. I write at the intersection of full-stack development, product design, and entrepreneurship. Plus, I stream on Twitch and co-host the Compressed.fm podcast. Let's talk about design and development.",
		image: amyDutton,
		links: {
			bluesky: "https://bsky.app/profile/selfteach.me",
			github: "https://github.com/ahaywood",
			linkedin: "https://www.linkedin.com/in/amy-dutton",
			twitch: "https://www.twitch.tv/selfteachme",
			x: "https://x.com/selfteachme",
			youtube: "https://www.youtube.com/c/selfteachme",
		},
		name: "Amy Dutton",
		qualification: "RedwoodJS lead maintainer",
		slug: "amy-dutton",
	},
	"anthony-fu": {
		biography:
			"I am a fanatical open sourceror passionate about DX, tooling, and the OSS ecosystem. I created Vitest, Slidev, VueUse, UnoCSS and built the ecosystem around them. I also made visual devtools like ESLint Config Inspector, Node Modules Inspector, Nuxt DevTools and so with care.",
		image: anthonyFu,
		links: {
			bluesky: "https://bsky.app/profile/antfu.me",
			github: "https://github.com/antfu",
			linkedin: "https://www.linkedin.com/in/antfu",
			mastodon: "https://fosstodon.org/@antfu@webtoo.ls",
			x: "https://x.com/antfu7",
			youtube: "https://www.youtube.com/@antfu",
		},
		name: "Anthony Fu",
		qualification: "open sourceror and design engineer",
		slug: "anthony-fu",
	},
	"david-sherret": {
		biography:
			"Software developer at Deno. Also working on ts-morph, dprint, and more. I used to work on neurosurgical planning and navigation software then later on a surgical robotic microscope.",
		image: davidSherret,
		links: {
			bluesky: "https://bsky.app/profile/dsherret.bsky.social",
			github: "https://github.com/dsherret",
			linkedin: "https://www.linkedin.com/in/david-sherret-7926431",
			x: "https://x.com/davidsherret",
		},
		name: "David Sherret",
		qualification: "Deno developer; creator of ts-morph, dprint, ts-ast-viewer",
		slug: "david-sherret",
	},
	"dominic-nguyen": {
		biography:
			"I’m the co-founder of Chromatic and Storybook, the industry-standard toolchain for building frontends. I have over a decade of experience in developer tools at companies like Apollo GraphQL and Meteor. I’ve helped teams—from startups to Fortune 500s—ship faster and with higher quality. Avid motorcyclist and home cook.",
		image: dominicNguyen,
		links: {
			bluesky: "https://bsky.app/profile/domyen.bsky.social",
			github: "https://github.com/domyen",
			linkedin: "https://www.linkedin.com/in/domyen",
			x: "https://x.com/domyen",
		},
		name: "Dominic Nguyen",
		qualification: "Chromatic creator; Storybook maintainer",
		slug: "dominic-nguyen",
	},
	"dylan-goings": {
		biography:
			"I am a senior developer and hiring manager at a boutique software consultancy in Ann Arbor, MI. I’ve been writing code for the web since there were browsers to write it in. As both a hands-on consultant and mentor to junior developers, I specialize in identifying and teaching emerging industry standards before they become mainstream. Outside of software I’m a voracious reader, an active player and former tournament judge for Magic: the Gathering, and my phone is totally dominated by pictures of my dog and three cats.",
		image: dylanGoings,
		links: {
			github: "https://github.com/dgoings",
			linkedin: "https://www.linkedin.com/in/dgoings",
		},
		name: "Dylan Goings",
		qualification: "WASM enthusiast",
		slug: "dylan-goings",
	},
	"giacomo-cavalieri": {
		biography: `Hello, I'm Giacomo, a software developer and a functional programming enthusiast.

Upon discovering Gleam I couldn’t help but fall in love with the language and its friendly community.
Now I'm a member of Gleam’s core team and an active contributor to its compiler’s development: I try my best to help with bug fixing, adding new features and... writing loads of tests! As strange as that might sound the test writing ended up being way more fun than I expected all thanks to a testing technique I've never heard before: snapshot testing. I've since made it my goal to share what I learned to help others waste less time on writing boring tests.`,
		image: giacomoCavalieri,
		links: {
			bluesky: "https://bsky.app/profile/giacomocavalieri.me",
			github: "https://github.com/giacomocavalieri",
			linkedin: "https://www.linkedin.com/in/giacomo-cavalieri",
			mastodon: "https://hachyderm.io/@giacomo_cavalieri",
			x: "https://x.com/giacomo_cava",
		},
		name: "Giacomo Cavalieri",
		qualification: "Gleam language core team member",
		slug: "giacomo-cavalieri",
	},
	"jake-bailey": {
		biography: `I'm a programming language lover, currently working on TypeScript at Microsoft. I focus on performance, infrastructure, and the ecosystem, but also whatever's fun (or manages to nerd snipe me)! You may know me from such adventures as TypeScript's conversion to modules, DefinitelyTyped's conversion to a monorepo, and now TypeScript's conversion to Go (sense a pattern?). Before TypeScript, I worked on Pylance/pyright, type checking Python.`,
		image: jakeBailey,
		links: {
			bluesky: "https://bsky.app/profile/jakebailey.dev",
			github: "https://github.com/jakebailey",
			linkedin: "https://www.linkedin.com/in/jakebbailey",
			mastodon: "https://fosstodon.org/@jakebailey",
			x: "https://x.com/andhaveaniceday",
		},
		name: "Jake Bailey",
		qualification: "TypeScript team; lover of programming languages",
		slug: "jake-bailey",
	},
	"jessica-garson": {
		biography: `Jessica Garson is a Python programmer, educator, and artist. She currently works at Elastic as a Senior Developer Advocate, where she serves as one of the primary technical reviewers for the blog Elasticsearch Labs. Previously, Jessica worked in developer relations at Twitter for four years. She has spoken at conferences worldwide, ranging from PyCon to Write the Docs, and has served as the keynote speaker for events such as PyOhio and the Developer Relations Summit. She uses code and modular synthesizers to make music and audio-reactive video art in her spare time and serves as a mentor for NEW INC.`,
		image: jessicaGarson,
		links: {
			bluesky: "https://bsky.app/profile/jessicagarson.bsky.social",
			github: "https://github.com/jessicagarson",
			linkedin: "https://www.linkedin.com/in/jessica-garson",
			x: "https://x.com/jessicagarson",
		},
		name: "Jessica Garson",
		qualification: "senior developer advocate at Elastic and artist",
		slug: "jessica-garson",
	},
	"maddy-montaquila": {
		biography: `Hi! I'm a product manager at Microsoft leading Aspire, which streamlines full stack dev across frontends, APIs, databases, and any other cloud-adjacent resource you can think of. I've spent the last 7 years making devs more productive through tooling like hot reload, Code extensions, and more - from C# backends to native mobile apps with TypeScript. I joined Aspire early in its creation because it made full-stack modern app dev something I could actually understand, and now I can't live without it. I'm also a lifelong Bostonian and reserve the right to be angry if the Red Sox don't make it to the playoffs.`,
		image: maddyMontaquila,
		links: {
			bluesky: "https://bsky.app/profile/maddymontaquila.net",
			github: "https://github.com/maddymontaquila",
			linkedin: "https://www.linkedin.com/in/maddyleger1",
			x: "https://x.com/maddymontaquila",
		},
		name: "Maddy Montaquila",
		qualification: "product lead for Aspire at Microsoft",
		slug: "maddy-montaquila",
	},
	"mattia-manzati": {
		biography: `I've been an Effect early adopter since 3+ years ago, and fell in love with the next-gen type safety it provides. Effect leveraged types as a tool that validate my computations descriptions at compile time, and I can't wait to share with you this experience with Effect, and the future devtooling we are building leveraged by this type-safe approach of Effect.`,
		image: mattiaManzati,
		links: {
			github: "https://github.com/mattiamanzati",
			linkedin: "https://www.linkedin.com/in/mattia-manzati-8662a28b",
			x: "https://x.com/MattiaManzati",
		},
		name: "Mattia Manzati",
		qualification: "founding engineer, Effectful Technologies",
		slug: "mattia-manzati",
	},
	"michelle-bakels": {
		biography: `I'm a software developer, community builder, and conference organizer. I work at G2i as a Senior Technical Program Director focused on Developer Health, where I lead initiatives to support the mental and physical well-being of software developers. 

I'm the co-organizer of React Miami, co-author of The Developer Health OS, and board member for South Florida Tech Hub Foundation and 1909. After receiving a diagnosis of a stress-induced heart condition triggered by burnout in the tech industry, I began a personal and professional journey to reimagine what sustainable success in software development can look like. Now, through my work and advocacy, I helps developers understand stress, recover from burnout, and embrace a philosophy of “Restful Work.”`,
		image: michelleBakels,
		links: {
			bluesky: "https://bsky.app/profile/michelle.blue",
			github: "https://github.com/michellebakels",
			linkedin: "https://www.linkedin.com/in/michelle-bakels-2052687a",
			x: "https://x.com/michellebakels",
		},
		name: "Michelle Bakels",
		qualification:
			"software developer, program director of developer health at G2i",
		slug: "michelle-bakels",
	},
	"nicolò-ribaudo": {
		biography: `I’m a developer who loves open source and JavaScript. I work at Igalia, where I help push the web forward, and I maintain Babel — the JavaScript compiler. I’m also a TC39 delegate and I’ve helped developing different JavaScript proposals over the years.`,
		image: nicoloRibaudo,
		links: {
			bluesky: "https://bsky.app/profile/nicr.dev",
			github: "https://github.com/nicolo-ribaudo",
			linkedin: "https://www.linkedin.com/in/nicolò-ribaudo-bb94b4187",
		},
		name: "Nicolò Ribaudo",
		qualification: "Babel maintainer and TC39 representative at Igalia",
		slug: "nicolò-ribaudo",
	},
	"oliver-dunk": {
		biography: `I'm on the Chrome DevRel team, where I work as a Developer Relations Engineer focused on Chrome Extensions. I'm also an editor in the W3C WebExtensions Community Group, where I work with other browser vendors and the community to improve the cross-browser extensions platform. In my free time, I've created developer tooling like https://web-extensions.dev and tinker with building other fun side projects. I think that more developers should feel empowered to build their own tooling!`,
		image: oliverDunk,
		links: {
			bluesky: "https://bsky.app/profile/oliverdunk.com",
			github: "https://github.com/oliverdunk",
			linkedin: "https://www.linkedin.com/in/oliverdunk",
			mastodon: "https://mastodon.social/@oliverdunk",
			x: "https://x.com/oliverdunk_",
		},
		name: "Oliver Dunk",
		qualification: "Chrome Extensions @ Google, Editor @ W3C WebExtensions CG",
		slug: "oliver-dunk",
	},
	"oliver-medhurst": {
		biography: `Hi! I'm Oliver Medhurst, also sometimes known as@canadahonk online. 20 year old software engineer. TC39 and WinterTC invited expert. ex-Mozilla. I work on Porffor, my from-scratch experimental ahead-of-time JS engine, full-time.`,
		image: oliverMedhurst,
		links: {
			bluesky: "https://bsky.app/profile/goose.icu",
			github: "https://github.com/canadahonk",
			x: "https://x.com/canadahonk",
		},
		name: "Oliver Medhurst",
		qualification: "creator of Porffor; TC39 & WinterTC invited expert",
		slug: "oliver-medhurst",
	},
	"pete-gonzalez": {
		biography: `I'm a software architect and open source advocate at TikTok, specializing in developer productivity for large-scale TypeScript monorepos. I'm also co-creator of the Rush Stack family of open source tools—which includes RushJS, Heft, API Extractor, and TSDoc—as well as TikTok's Sparo and Lockfile Explorer projects. This year I'm helping to promote the LynxJS SDK, an exciting new way to make mobile apps!`,
		image: peteGonzalez,
		links: {
			bluesky: "https://bsky.app/profile/octogonz.com",
			github: "https://github.com/octogonz",
			mastodon: "https://mastodon.social/@octogonz",
			x: "https://x.com/octogonz_",
		},
		name: "Pete Gonzalez",
		qualification:
			"co-creator of Lockfile Explorer, engineer at TikTok, core maintainer of TSDoc",
		slug: "pete-gonzalez",
	},
	"shelley-vohr": {
		biography: `I’m Shelley Vohr, a software engineer based in Berlin, Germany. I’m a Principal Engineer at Microsoft, where I’ve worked as an Electron maintainer for over 7 years, as well as on Node.js as a TSC member and collaborator. Outside of work, I love to uncover hidden treasures at the flea market, eat the saltiest licorice humans can handle, and never miss the daily NYT crossword.`,
		image: shelleyVohr,
		links: {
			bluesky: "https://bsky.app/profile/codebyte.re",
			github: "https://github.com/codebytere",
			linkedin: "https://www.linkedin.com/in/codebytere",
			x: "https://x.com/codebytere",
		},
		name: "Shelley Vohr",
		qualification: "core eng @electron; collaborator @nodejs",
		slug: "shelley-vohr",
	},
	"tj-devries": {
		biography: `I'm TJ DeVries, a long time core contributor to Neovim and the author of Telescope.nvim - a fuzzy finder for neovim. If you go far enough back, you can see my ancient issue about adding LSP support to neovim... and eventually an LSP client built first with vimscript, then eventually Lua. These days I'm a streamer, course author, and purveyor of fine terminal-sourced coffee.`,
		image: tJDeVries,
		links: {
			github: "https://github.com/tjdevries",
			twitch: "https://www.twitch.tv/teej_dv",
			x: "https://x.com/teej_dv?lang=en",
			youtube: "https://www.youtube.com/c/tjdevries",
		},
		name: "TJ DeVries",
		qualification: "Neovim core team",
		slug: "tj-devries",
	},
} satisfies Record<string, SpeakerInfo>;
