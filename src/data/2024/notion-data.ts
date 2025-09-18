export interface Person {
	bio: null | string;
	links: PersonLinks;
	name: string;
	qualification: null | string;
	role: null | string;
	slug: string;
}

export interface PersonLinks {
	bluesky: null | string;
	github: null | string;
	gitlab: null | string;
	linkedin: null | string;
	mastodon: null | string;
	medium: null | string;
	twitch: null | string;
	twitter: null | string;
	website: null | string;
	youtube: null | string;
}

export const peopleBySlug: Record<string, Person> = {
	"aakansha-doshi": {
		bio: "I'm deeply passionate about Free and open-source software \\(FOSS\\) and love exploring the inner workings of the Web and JavaScript. As a core maintainer of projects like [Excalidraw](https://excalidraw.com/), [React-Tags](https://github.com/react-tags/react-tags), [Mermaid-to-Excalidraw](https://github.com/excalidraw/mermaid-to-excalidraw) and more libraries, I’m dedicated to contributing to the open-source community. I also organize and lead monthly FOSS meetups in Bangalore, India. Outside of tech, I’m a big foodie with a love for travel and cherish spending quality time with my family.",
		links: {
			bluesky: null,
			github: "https://github.com/ad1992",
			gitlab: null,
			linkedin: "https://www.linkedin.com/in/aa1992",
			mastodon: null,
			medium: null,
			twitch: null,
			twitter: "https://x.com/aakansha1216",
			website: null,
			youtube: null,
		},
		name: "Aakansha Doshi",
		qualification: "[Excalidraw](https://excalidraw.com/) Core Maintainer",
		role: "Open Source",
		slug: "aakansha-doshi",
	},
	"aaron-harper": {
		bio: "I’m a software developer in Ann Arbor, Michigan. I’m a fan of writing reliable code, my dog Benny, and attending my favorite local meetup: Michigan TypeScript. When I’m not helping developers implement durable workflows, I love spending time with my wife and daughter, gardening, and building orchestration engines that combine event driven architecture and workflows.",
		links: {
			bluesky: null,
			github: "https://github.com/goodoldneon",
			gitlab: null,
			linkedin: "https://www.linkedin.com/in/aaronmharper",
			mastodon: null,
			medium: null,
			twitch: null,
			twitter: "https://x.com/AliasShmalias",
			website: null,
			youtube: null,
		},
		name: "Aaron Harper",
		qualification: "Software Engineer, [Inngest](https://inngest.com/)",
		role: "",
		slug: "aaron-harper",
	},
	"chris-griffing": {
		bio: "I love building things on my Twitch stream and some of those things have been CLI tools. When you are creating binaries, you sometimes want people to be able to extend your tools with their own functionality. The simplest path has traditionally been exposing a server API for someone to interact with but many security-minded users are averse to the idea of a tool they use running a local http server. You can give your users extensibility without the need for a local http server and at the same time allow them to use any of the languages supported by the Extism toolkit.",
		links: {
			bluesky: null,
			github: "https://github.com/cmgriffing",
			gitlab: null,
			linkedin: "https://www.linkedin.com/in/cmgriffing",
			mastodon: null,
			medium: null,
			twitch: "https://twitch.tv/cmgriffing",
			twitter: "https://x.com/cmgriffing",
			website: "https://chrisgriffing.com",
			youtube: "https://youtube.com/@cmgriffing",
		},
		name: "Chris Griffing",
		qualification: "WASM Fanatic",
		role: "[GitKraken](https://www.gitkraken.com/)",
		slug: "chris-griffing",
	},
	"corina-murg": {
		bio: "I’m a certified accessibility engineer and founder of Web for Everyone, an initiative dedicated to introducing accessibility concepts to frontend developers. I’m also the accessibility specialist for Gridiron Survivor, an open source project building a SaaS application. In my previous career as a high school math teacher, I was regularly concerned with creating learning experiences that were accessible and welcoming to each and everyone of my students. Teaching a legally blind student first introduced me to the concept of digital accessibility.  Through my work in frontend development, I want to make sure that everyone, including my former student and other people with disabilities, can easily navigate and understand the products and services we build. Outside coding, I love reading and memorizing poems, as well as taking walks with my cat.",
		links: {
			bluesky: null,
			github: "https://github.com/CorinaMurg",
			gitlab: null,
			linkedin: "https://www.linkedin.com/in/corinamurg",
			mastodon: null,
			medium: null,
			twitch: null,
			twitter: "https://x.com/CorinaMurg",
			website: "https://webforeveryone.us",
			youtube: null,
		},
		name: "Corina Murg",
		qualification: "Accessibility Engineer",
		role: "Founder, [Web for Everyone](https://webforeveryone.us/)",
		slug: "corina-murg",
	},
	"dan-farrelly": {
		bio: "I'm Dan. I am a founder at [Inngest](https://www.inngest.com/) and spent previous several years as CTO at [Buffer](https://buffer.com/). Back when I had more time I built [Timezone.io](https://timezone.io/) \\(service, [open-source](https://github.com/timezoneio/timezoneio)\\) and [MailDev](https://maildev.github.io/maildev/) \\(dev tool, [open-source](https://github.com/maildev/maildev)\\).  In 2020 I bought a 96 year old house and started [a restoration and renovation project](https://www.instagram.com/michigancraftsman/) on the weekends. Hit me up if you want to chat home renovations.",
		links: {
			bluesky: null,
			github: "https://github.com/djfarrelly",
			gitlab: null,
			linkedin: "https://www.linkedin.com/in/djfarrelly",
			mastodon: null,
			medium: null,
			twitch: null,
			twitter: "https://x.com/djfarrelly",
			website: "https://danfarrelly.com",
			youtube: null,
		},
		name: "Dan Farrelly",
		qualification: "CTO, [Inngest](https://inngest.com/)",
		role: "",
		slug: "dan-farrelly",
	},
	"dan-vanderkam": {
		bio: "",
		links: {
			bluesky: null,
			github: "https://github.com/danvk",
			gitlab: null,
			linkedin: "https://www.linkedin.com/in/danvk",
			mastodon: null,
			medium: null,
			twitch: null,
			twitter: "https://x.com/danvdk",
			website: null,
			youtube: null,
		},
		name: "Dan Vanderkam",
		qualification: "TypeScript Compiler Contributor",
		role: "[_Effective TypeScript_](https://effectivetypescript.com/) Author",
		slug: "dan-vanderkam",
	},
	"don-isaac": {
		bio: "My name is Don, and I work on next-gen tooling for finding incorrect code both statically and dynamically. I currently work on both Oxc and an autonomous UI testing agent, and have been writing code for over 10 years.",
		links: {
			bluesky: null,
			github: "https://github.com/DonIsaac",
			gitlab: null,
			linkedin: "https://www.linkedin.com/in/donaldisaac",
			mastodon: null,
			medium: null,
			twitch: null,
			twitter: "https://x.com/Don_dev_",
			website: null,
			youtube: null,
		},
		name: "Don Isaac",
		qualification:
			"[JavaScript Oxidation Compiler](https://oxc.rs/) Maintainer",
		role: "",
		slug: "don-isaac",
	},
	"fatima-sarah-khalid": {
		bio: "As a Developer Evangelist at GitLab, Fatima specializes in CI/CD, community building, and evangelizing AI-powered workflows. She is deeply passionate about open source and is committed to building more inclusive tech communities. Better known as \"sugaroverflow\" on the internet, she's known for storytelling, simplifying technical concepts, and keynotes on inclusion & ally-ship. In recognition of her contributions to technology and advocacy, she received the WCT Rising Star award in 2018. When she's not playing board games with friends, you'll find her reading science fiction by the ocean.",
		links: {
			bluesky: "https://bsky.app/profile/sugaroverflow.bsky.social",
			github: "https://github.com/sugaroverflow",
			gitlab: "https://gitlab.com/sugaroverflow",
			linkedin: "https://www.linkedin.com/in/sugaroverflow",
			mastodon: "https://hachyderm.io/@sugaroverflow",
			medium: null,
			twitch: null,
			twitter: "https://x.com/sugaroverflow",
			website: null,
			youtube: null,
		},
		name: "Fatima Sarah Khalid",
		qualification: "Developer Evangelist, [GitLab](https://gitlab.com/)",
		role: "",
		slug: "fatima-sarah-khalid",
	},
	"jess-lin": {
		bio: 'I\'ve been a software engineer for a decade. I first worked on an open source IDE at Facebook in 2013; then moved to ads at Pinterest, collaboration tools at Stripe, and absolutely everything at Instabase when it was only 5 people. In recent years, I\'ve enjoyed roles that bring me close to users, first as a deployed engineer at Retool and now as a devrel at Render.On software teams, I\'ve always found myself helping colleagues communicate their technical ideas. With my background, I can help engineers efficiently and with a lot of empathy. I’ve produced, written, and ghostwritten successful tech blog posts that have hit the front page of Hacker News and been featured in prominent newsletters.This talk came out of a colleague at Render asking me to explain all the edits I made to his posts \\(he could see the "what" but not the "why"\\)—and SquiggleConf is the perfect excuse to sit down and explain!',
		links: {
			bluesky: null,
			github: "https://github.com/jssln",
			gitlab: null,
			linkedin: "https://www.linkedin.com/in/jessica-lin-17b0771b",
			mastodon: null,
			medium: null,
			twitch: null,
			twitter: "https://x.com/jesstyping",
			website: "https://www.jssln.com",
			youtube: null,
		},
		name: "Jess Lin",
		qualification: "Software Engineer & Technical Writer",
		role: "DevRel, [Render](https://render.com/)",
		slug: "jess-lin",
	},
	"katerina-skroumpelou": {
		bio: "Senior Engineer at [Nx](https://nx.dev/), open source contributor, [GDE](https://developers.google.com/community/experts) for Angular/Google Maps platform, [WTM Ambassador](https://developers.google.com/womentechmakers/ambassadors), [AngularAthens](https://www.meetup.com/angular-athens/) meetup co-founder. Mentoring women into tech, speaking about the cool things I do, climbing mountains and serving cats for life. More at [psyber.city](https://psyber.city/%F0%9F%90%88).",
		links: {
			bluesky: null,
			github: "https://github.com/mandarini",
			gitlab: null,
			linkedin: "https://www.linkedin.com/in/katerinaskroumpelou/",
			mastodon: "https://mas.to/@psybercity",
			medium: "https://pakotinia.medium.com",
			twitch: null,
			twitter: "https://x.com/psybercity",
			website: "https://psyber.city",
			youtube: null,
		},
		name: "Katerina Skroumpelou",
		qualification: "Senior Engineer, [Nx](https://nx.dev/)",
		role: "Google Developer Expert for Angular",
		slug: "katerina-skroumpelou",
	},
	"laurynas-keturakis": {
		bio: "I'm a full-stack software engineer building API tools at Fiberplane. I care about open source observability tools and focus on making them more accessible for every day developers.",
		links: {
			bluesky: "https://bsky.app/profile/laurynas.cc",
			github: "https://github.com/keturiosakys",
			gitlab: null,
			linkedin: "https://www.linkedin.com/in/lketurakis",
			mastodon: "https://hachyderm.io/@laurynas",
			medium: null,
			twitch: null,
			twitter: "https://x.com/_laurynas",
			website: "https://laurynas.cc",
			youtube: null,
		},
		name: "Laurynas Keturakis",
		qualification: "[fpx](https://github.com/fiberplane/fpx) Maintainer",
		role: "Developer, [Fiberplane](https://fiberplane.com/)",
		slug: "laurynas-keturakis",
	},
	"loris-cro": {
		bio: "Hi, I'm Loris. I work at the Zig Software Foundation, and my main job is to help Zig grow a vibrant community and ecosystem. While, like most people, I started with only high-level programming languages, Zig has introduced me to systems programming and shown me all the design choices that previous programming languages had precluded me from accessing. I now use my newfound superpowers to try to write performant and robust applications, and on occasion I even succeed :^\\)",
		links: {
			bluesky: "https://bsky.app/profile/kristoff.it",
			github: "https://github.com/kristoff-it",
			gitlab: null,
			linkedin: "https://linkedin.com/in/kristoff-it",
			mastodon: "https://hachyderm.io/@kristoff",
			medium: null,
			twitch: "https://www.twitch.tv/kristoff_it",
			twitter: "https://x.com/croloris",
			website: "https://kristoff.it",
			youtube: "https://www.youtube.com/@ZigSHOWTIME",
		},
		name: "Loris Cro",
		qualification: "Zig Livecoder",
		role: "VP Community, [Zig Software Foundation](https://ziglang.org/zsf/)",
		slug: "loris-cro",
	},
	"max-kless": {
		bio: "Max is a software engineer at [Nx](https://nx.dev/) and works on the core team. He spends a lot of his time building [Nx](https://nx.dev/getting-started/intro) & [Nx Console](https://nx.dev/recipes/nx-console) - a VSCode and JetBrains extension for Nx workspaces. When not digging through code, he spends his time travelling, reading sci-fi and listening to music.",
		links: {
			bluesky: null,
			github: "https://github.com/MaxKless",
			gitlab: null,
			linkedin: "https://www.linkedin.com/in/max-kless-398530216",
			mastodon: null,
			medium: null,
			twitch: null,
			twitter: "https://x.com/MaxKless",
			website: null,
			youtube: null,
		},
		name: "Max Kless",
		qualification:
			"[Nx Console](https://github.com/nrwl/nx-console) VSCode Extension Maintainer",
		role: "Senior Engineer, [Nx](https://nx.dev/)",
		slug: "max-kless",
	},
	"nick-nisi": {
		bio: "I’ve been immersed in TypeScript for over a decade, bringing my experience and expertise to a variety of companies and contributing to significant projects like The Dojo Toolkit and Codesandbox. I’m a panelist on the popular JavaScript podcast, JS Party, where I have the pleasure of interviewing and learning from the best in the industry. Currently, I’m a software engineer at a leading tech company, and I actively engage with the tech community by speaking at conferences and sharing my passion for web development, TypeScript, and Vim. My goal is to foster a collaborative environment and inspire fellow developers. When I’m not coding or podcasting, I’m practicing my public speaking through the art of karaoke, or being kept on my toes by my two kids who ensure life is never dull!",
		links: {
			bluesky: "https://bsky.app/profile/nicknisi.com",
			github: "https://github.com/nicknisi",
			gitlab: null,
			linkedin: "https://linkedin.com/in/nicknisi",
			mastodon: "https://fediverse.nicknisi.com/@nicknisi",
			medium: null,
			twitch: null,
			twitter: "https://x.com/nicknisi",
			website: "https://nicknisi.com",
			youtube: "https://www.youtube.com/nicknisi",
		},
		name: "Nick Nisi",
		qualification: "MC for [TS Conf](https://archive.tsconf.io/2021/)",
		role: "Panelist of [JS Party](https://changelog.com/jsparty)",
		slug: "nick-nisi",
	},
	"rachel-nabors": {
		bio: "Rachel Lee Nabors has led developer education at FAANG companies and startups. They've participated in browser development, web animation standards and open source with Mozilla, W3C, and Microsoft and wrote “Animation at Work.” Most recently, they built award-winning React and React Native dev portals at Meta. Currently, they live in London, writing a book on how to survive your tech career.",
		links: {
			bluesky: null,
			github: "https://github.com/rachelnabors",
			gitlab: null,
			linkedin: "https://linkedin.com/in/rachelnabors",
			mastodon: "https://toot.cafe/@rachelnabors",
			medium: null,
			twitch: "https://www.twitch.tv/nearestnabors",
			twitter: "https://x.com/rachelnabors",
			website: null,
			youtube: null,
		},
		name: "Rachel Nabors",
		qualification: "Author, Cartoonist, and DevRel Extraordinaire",
		role: "",
		slug: "rachel-nabors",
	},
	"rick-viscomi": {
		bio: "I'm a web performance engineer working on the Chrome Web DevRel team at Google, where my mission is to make the web faster. My role is to promote web performance best practices to help developers succeed with Core Web Vitals, and a major part of that is giving developers the right tools to measure and debug slow user experiences. I'm currently working closely with the Chrome DevTools team on the next generation Performance panel, and since 2017 I've been working on the Chrome UX Report, a public dataset of real-world performance data from millions of websites. I've also built several tools including the Core Web Vitals Technology Report and the CrUX Dashboard to help developers track performance and discover opportunities for improvement, and I co-wrote Using WebPageTest, a book about the web performance testing tool.",
		links: {
			bluesky: null,
			github: "https://github.com/rviscomi",
			gitlab: null,
			linkedin: "https://www.linkedin.com/in/rviscomi/",
			mastodon: null,
			medium: null,
			twitch: null,
			twitter: "https://x.com/rick_viscomi",
			website: "https://rviscomi.dev",
			youtube: "https://www.youtube.com/@RickViscomi",
		},
		name: "Rick Viscomi",
		qualification: "[Chrome](https://www.google.com/chrome/) Team, Google",
		role: "Web Performance DevRel",
		slug: "rick-viscomi",
	},
	"rizel-scarlett": {
		bio: "I am a Staff Developer Advocate at TBD, Block's newest business unit. At TBD, we're shifting the paradigm by converting open standards into open source SDKs that make cross border payments and data ownership more accessible for users. I'm responsible for helping people understand how to use the SDKs through documentation, content creation, conference talks, and practical code examples. With a diverse background spanning GitHub, startups, and non-profit organizations, I have cultivated a passion for utilizing emerging technologies to champion equity within the tech industry. I moonlight as an Advisor at G{Code} House, an organization aimed at teaching women of color and non-binary people of color to code. I believe in leveraging vulnerability, honesty, and kindness as means to educate early-career developers.",
		links: {
			bluesky: null,
			github: "https://github.com/blackgirlbytes",
			gitlab: null,
			linkedin: "https://linkedin.com/in/rizel-bobb-semple",
			mastodon: "https://hachyderm.io/@blackgirlbytes",
			medium: null,
			twitch: null,
			twitter: "https://x.com/blackgirlbytes",
			website: null,
			youtube: null,
		},
		name: "Rizèl Scarlett",
		qualification: "",
		role: "Staff Developer Advocate, [TBD](https://developer.tbd.website/)",
		slug: "rizel-scarlett",
	},
	"robby-russell": {
		bio: "Hi, I'm Robby Russell, the creator of Oh My Zsh, one of the most popular open-source projects on GitHub with nearly 2,400 contributors. As I reflect on the 15th anniversary of its release, I remember creating Oh My Zsh to scratch a selfish itch within my small team, never anticipating its widespread adoption. By attending my talk, you'll gain a deeper understanding of why it became successful, learn from the unexpected journey, and discover valuable lessons that can help you in your own projects.",
		links: {
			bluesky: null,
			github: "https://github.com/robbyrussell",
			gitlab: null,
			linkedin: "http://www.linkedin.com/in/robbyrussell",
			mastodon: "https://ruby.social/@robbyrussell",
			medium: null,
			twitch: null,
			twitter: "https://x.com/robbyrussell",
			website: null,
			youtube: null,
		},
		name: "Robby Russell",
		qualification: "[Oh My Zsh](https://ohmyz.sh/) Creator",
		role: "CEO, [Planet Argon](https://www.planetargon.com/); host of [Maintainable](https://maintainable.fm/)",
		slug: "robby-russell",
	},
	"titian-cernicova-dragomir": {
		bio: "Hi, I’m Titian! I’m a software engineer on the JavaScript Infrastructure team at Bloomberg, where I work on JavaScript and TypeScript tooling for the company’s internal developers. I am passionate about TypeScript and, together with my colleagues, have contributed to TypeScript features such as Private Methods in classes and Isolated Declarations. I also enjoy answering questions about TypeScript, so you might have come across one of my Stack Overflow answers. Feel free to ask me any questions! In my free time, I love spending time with my lovely wife, two kids, and my fully gray cat.",
		links: {
			bluesky: null,
			github: "https://github.com/dragomirtitian",
			gitlab: null,
			linkedin: "https://uk.linkedin.com/in/titian-cernicova-dragomir-2b37457a",
			mastodon: null,
			medium: null,
			twitch: null,
			twitter: "https://x.com/TitianCernicova",
			website: null,
			youtube: null,
		},
		name: "Titian Cernicova-Dragomir",
		qualification: "TypeScript Compiler Contributor",
		role: "Software Engineer, [Bloomberg](https://www.bloomberg.com/)",
		slug: "titian-cernicova-dragomir",
	},
	"yagiz-nizipli": {
		bio: "I’m Yagiz Nizipli. I’m a Node.js Technical Steering committee member, and a Principal Systems Engineer at Cloudflare. With a deep passion for performance optimization, I’ve made significant improvements to Node.js performance by having more than 250+ contributions. I’ve written several tools such as “node —run” and “node —env-file”. I’m also the author of Ada URL Parser, the implementation used by Node.js and Cloudflare workers.",
		links: {
			bluesky: null,
			github: "https://github.com/anonrig",
			gitlab: null,
			linkedin: "https://www.linkedin.com/in/yagiznizipli/",
			mastodon: null,
			medium: null,
			twitch: null,
			twitter: "https://x.com/yagiznizipli",
			website: "https://yagiz.co",
			youtube: null,
		},
		name: "Yagiz Nizipli",
		qualification:
			"[Node.JS TSC](https://github.com/nodejs/TSC) Member & Frequent [Contributor](https://github.com/nodejs/node/commits?author=anonrig)",
		role: "Principal Systems Engineer, [Cloudflare](https://www.cloudflare.com/)",
		slug: "yagiz-nizipli",
	},
};

export type TalkFormat = "Full" | "Lightning" | "Workshop";

export interface TalkInfo {
	description: string;
	people: Person[];
	slug: string;
	tags: string[];
	talkFormat: TalkFormat;
	title: string;
}

export const talksBySlug: Record<string, TalkInfo> = {
	"talk-aakansha-doshi": {
		description:
			"How do we manipulate pixels in a DOM-oriented world? HTML \\<canvas\\>! I recently built [Excalidraw](https://excalidraw.com/)’s ‘labeled arrows’ feature, which heavily utilizes all sorts of Canvas element JavaScript APIs for rich graphics and media display in web browsers. Let’s dig in to see how Canvas and Excalidraw work under the hood!\n\nI’ll cover with demos:\n- Why labeled arrows were built: including the ‘how’ and ‘why’ of design decisions\n- The architecture of how elements are structured and how text is tied to the arrow\n- Rendering arrows in canvas, including multi-point arrows and transparency effects\n- How Canvas and SVG compare & contrast with mask attributes, clipping, and clearRect\n- Performance optimizations such as caching labeled repeat computational and graphics work\n\nThe audience will come away understanding how Canvas APIs work together - along with how labeled arrows were implemented in Excalidraw.",
		people: [peopleBySlug["aakansha-doshi"]],
		slug: "talk-aakansha-doshi",
		tags: ["Canvas", "SVG", "Performance"],
		talkFormat: "Full",
		title: "Excalidraw: Canvas All The Way Down",
	},
	"talk-chris-griffing": {
		description:
			"How awesome would it be if anyone could write plugins in any languages that interop with your application regardless of your stack? Introducing [Extism](https://github.com/extism/extism): a powerful plugin system that allows you to integrate WASM code into your servers, the edge, CLIs, IoT, browsers and everything in between.\n\nThe talk will start out with a history of WASM and it's predecessor \\([asm.js](https://en.wikipedia.org/wiki/Asm.js)\\). We will even point out [Gary Bernhardt's ‘Birth and Death of JavaScript’ presentation](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript) and how it seems to have predicted where WASM could go. After understanding WASM and its history, we will outline what Extism is, how it can be used, as well as some real-world examples of its usage.",
		people: [peopleBySlug["chris-griffing"]],
		slug: "talk-chris-griffing",
		tags: ["WebAssembly", "Cross-Language", "Open Source", "Language Soup"],
		talkFormat: "Lightning",
		title: "Creating a WASM-Powered Plugin System For Your App",
	},
	"talk-corina-murg": {
		description:
			"Accessibility is a core component of the web — yet many web development teams treat it as an afterthought. Building with accessibility in mind involves understanding the rules of accessibility and how to use web dev tools to your advantage in designing and debugging it.\n\nLet’s go through the [Accessibility Tree](https://developer.chrome.com/blog/full-accessibility-tree): a hidden gem for understanding how a webpage will be presented through various accessibility lenses. We’ll explore how to access and use the accessibility tree through DevTools and discuss the slight differences in how different browsers render the tree. From there, we’ll delve into the structure of the tree and explore its relationship to the DOM. \n\nBy understanding and utilizing the Accessibility Tree, we can build digital products and services that are more inclusive and compliant.",
		people: [peopleBySlug["corina-murg"]],
		slug: "talk-corina-murg",
		tags: [
			"Accessibility Tree",
			"Debugging",
			"Chrome DevTools",
			"Inclusive Design",
		],
		talkFormat: "Lightning",
		title: "Harnessing the Accessibility Tree: Debugging with this Hidden Gem",
	},
	"talk-dan-vanderkam": {
		description:
			"There’s nothing more devtool-y than how you store your code.  Over the past 50 years, computers have grown dramatically more powerful, user interfaces have grown increasingly complex, and computer programs have grown orders of magnitude larger. But despite all this change, we still represent computer code the same way we did in 1970: as plain text files. Why is plain text so ubiquitous, and why do attempts to replace it always fail?",
		people: [peopleBySlug["dan-vanderkam"]],
		slug: "talk-dan-vanderkam",
		tags: ["ASTs", "Parsing", "Source Code"],
		talkFormat: "Full",
		title: "The Battle for Source Code: Why Text Always Wins",
	},
	"talk-don-isaac": {
		description:
			"The [Oxc Project](https://oxc.rs/) is a collection of high-performance JavaScript/TypeScript tools written in Rust. It comes with a parser, a linter, and other build-time libraries and utilities. But didn’t these already exist? Why did we need to rewrite them in another language?\n\nGreat questions! This talk will walk through the incredible performance and interoperability opportunities of moving shared web dev tooling to a native-speed language like Rust. You’ll see both how to use these wonderfully fast new tools in your project to unlock speedy and reliable builds immediately.\n\nEven better, you’ll also get an insider’s view of how these projects are built. There’s all sorts of fantastic engineering at play, ranging from re-using test suites from Babel and TypeScript themselves to community-oriented integration tests to ensure compatibility. The end result is a rich set of community tooling for the Rust ecosystem that is a joy to work with.",
		people: [peopleBySlug["don-isaac"]],
		slug: "talk-don-isaac",
		tags: ["Rust", "CLIs", "Performance", "TypeScript"],
		talkFormat: "Full",
		title: "Oxc: Pluggable Next-Gen Tooling At Rust Speed",
	},
	"talk-jess-lin": {
		description:
			"Writing a technical blog post may sound like a solo task, but in reality it’s just like good software—best with a writer and reviewer/editor. But what does that process look like, and what’s the role of the editor?\n\nIn this talk, I’ll first show elements of a good versus great blog post, with examples. A good post gets the information across in an orderly fashion. A great blog post starts from great source material, and manages to be a page turner. Sometimes, good is all you need, but it’s useful to recognize when you have the potential for great.\n\nNext, I’ll show real examples of specific edits to blog posts I consider good and great. In general, you need to first edit at the macro level \\(e.g. throwing out an entire first draft and choosing a completely different angle\\) and then the micro level \\(e.g. restructuring sentences for clarity\\). The title and opening deserve special attention, and I’ll share tactics you can use to write and refine them.\n\nMarketing your software isn’t just for marketers. These techniques will help you in everything from pull request descriptions to release announcements. I’ll use real material from a series of blog posts we published in spring 2024 at [Render](https://render.com/) to show how much of a difference applying editing craft to communications can make.",
		people: [peopleBySlug["jess-lin"]],
		slug: "talk-jess-lin",
		tags: [
			"Docs",
			"Launching Software Products",
			"Community Building",
			"Technical Writing",
		],
		talkFormat: "Full",
		title: "How To Write About Software",
	},
	"talk-laurynas-keturakis": {
		description:
			"Traces are an incredibly useful tool for understanding how your code actually runs function-by-function. With [OpenTelemetry](https://opentelemetry.io/) being accepted as standard by vendors and language platforms alike, there has never been a better time to start using it. Yet, many teams adopt traces late in the development cycle when code is hard to change and new tools always take time and money to learn.\n\nThis talk will show you how you can get started using tracing locally and what you can get out of it. It will discuss the benefits you get from well-traced applications and why it is so hard to get there.  We’ll cover what makes tracing hard, how to smooth out those rough edges and get you debugging your code in no time!",
		people: [peopleBySlug["laurynas-keturakis"]],
		slug: "talk-laurynas-keturakis",
		tags: ["Tracing", "Debugging", "Open Telemetry"],
		talkFormat: "Lightning",
		title: "Tracing: Start On Day Zero",
	},
	"talk-loris-cro": {
		description:
			"Have you ever started a simple project, wanted something to exist, and ended up spending all your time building it yourself? I recently went from building static sites, to building my own static site generator, to writing a new HTML parser and then language server from scratch.\n\nThis talk will guide you through that process of how my yak-shaving stack evolved over time, starting with using TreeSitter as a parser, and culminating in the [Zine](https://zine-ssg.io/) static site generator and [SuperHTML](https://github.com/kristoff-it/superhtml) language server. We’ll cover both why those things are useful and how they actually work under the hood.\n\nBy the end of this talk, you will have concluded I’m a maniac, or you will have developed your own appreciation for occasionally building things from scratch. Likely both.",
		people: [peopleBySlug["loris-cro"]],
		slug: "talk-loris-cro",
		tags: ["Zig", "Language Server Protocol", "TreeSitter", "Parsing"],
		talkFormat: "Full",
		title: "Building an LSP Server from Scratch in Zig",
	},
	"talk-rachel-nabors": {
		description:
			"Did you know web animations have their own dedicated browser dev tools? Come learn how to debug timeline based animations in the browser and share animation specs across teams!\n\nOften design happens in Figma and development happens in components. During that hand-off, motion and interaction design can fall through the cracks. But there are great tools and techniques that marry development and design, bringing life and personality to your UI.\n\nWe’ll start with the basics needed to add some visual interest to any project and escalate all the way to integrating complex, orchestrated animations from a motion design team into your workflow.  We’ll also cover CSS animation utility libraries, easing tools for creating custom eases and springs, using the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) to react to and chain animation events.",
		people: [peopleBySlug["rachel-nabors"]],
		slug: "talk-rachel-nabors",
		tags: [
			"Web Animations API",
			"Debugging Tools",
			"Design",
			"CSS Animations Panel",
		],
		talkFormat: "Lightning",
		title: "Web Animations: Tools and Techniques",
	},
	"talk-rick-viscomi": {
		description:
			"Excellent tools are at the heart of every performance optimization workflow. From synthetic testing, auditing, and diagnosing performance issues to collecting and analyzing performance data from real-world user experiences. A good performance workflow utilizes both real-world _and_ synthetic tooling to help you understand how fast your site is and how to make it faster.\n\nIn this talk, we'll explore Google's recommended web performance tooling workflow for fast [Core Web Vitals](https://web.dev/articles/vitals). We'll focus on Chrome DevTools and the powerful [Performance panel](https://developer.chrome.com/docs/devtools/performance) to get a better understanding of what's happening under the hood. We'll also look at a typical data pipeline for collecting and analyzing real-user data to get a better understanding of the top performance issues and opportunities. Finally, we'll look at a few techniques to significantly improve some of the most common and impactful issues with loading performance and interaction responsiveness.",
		people: [peopleBySlug["rick-viscomi"]],
		slug: "talk-rick-viscomi",
		tags: ["Chrome DevTools", "Performance", "Core Web Vitals"],
		talkFormat: "Full",
		title: "Diving Into The Chrome DevTools Performance Panel",
	},
	"talk-rizel-scarlett": {
		description:
			"Sigh, your docs are broken and outdated. But here's the good news: they don’t have to be!\n\nDocumentation is a reflection of the quality of your dev tooling, so if it's broken and outdated that sets the tone for your product's reputation. I empathize with you: as your tooling constantly evolves, keeping documentation up-to-date is challenging, especially when managing multiple programming languages. You already have so much going on. Docs are important, and your time is too.\n\nJoin Rizèl for a session on working smarter \\(and not harder\\) with practical techniques for integrating documentation into your development workflows. Rizèl will share how to efficiently treat your developer docs as code to ensure your documentation remains reliable and current.",
		people: [peopleBySlug["rizel-scarlett"]],
		slug: "talk-rizel-scarlett",
		tags: ["Developer Relations", "Community Building", "Documentation"],
		talkFormat: "Full",
		title: "Escaping the Curse of Outdated Docs",
	},
	"talk-robby-russell": {
		description:
			"Join Robby Russell, the creator of [Oh My Zsh](https://ohmyz.sh/), as he reflects on the remarkable journey of this CLI framework on its 15th anniversary. Robby will share his candid experiences and insights into how a project that started without a clear plan managed to gain widespread adoption across the software industry. \n\nWe’ll travel through the origins of Oh My Zsh, its surprising growth, and the valuable lessons he learned along the way. Robby will highlight the significance of creating user-friendly and practical tools, especially for new developers. He'll delve into the art of engaging with an open-source community and his mission to bring enjoyment to the command line. Robby's advice on developing a successful open-source project will resonate with web developers eager to improve their tools and contribute to community-driven innovation.\n\nThis talk aims to show that anyone can launch a successful software project with the right mindset and motivation. Robby's story demonstrates the power of solving problems for yourself and your peers. He will discuss building and sharing useful tools, showing that even small efforts can have a significant impact. This talk will give you a deeper understanding of the power of collaboration and how these principles can be applied to your work in and around developer tooling.",
		people: [peopleBySlug["robby-russell"]],
		slug: "talk-robby-russell",
		tags: [
			"CLIs",
			"Community Building",
			"Launching Software Products",
			"Open Source",
		],
		talkFormat: "Full",
		title: "Oh My Zsh: Learnings Over 15 Years of CLI Innovation",
	},
	"talk-titian-cernicova-dragomir": {
		description:
			"Isolated Declarations is a new feature in TypeScript 5.5 that is designed to help speed up build times in monorepos. In this talk, we'll discuss how Bloomberg, in collaboration with Google and Microsoft, helped develop this feature. You'll learn how Isolated Declarations can enable parallel builds for faster overall build times, and we'll also examine what this means for how you author your code.",
		people: [peopleBySlug["titian-cernicova-dragomir"]],
		slug: "talk-titian-cernicova-dragomir",
		tags: ["TypeScript", "Monorepo Tooling", "Debugging", "Build Optimization"],
		talkFormat: "Full",
		title: "The Road to Faster Builds: Developing Isolated Declarations",
	},
	"talk-yagiz-nizipli": {
		description:
			"Performance is important! So important, that performance engineers tend to have an “occupational hazard” of optimizing everything. Join Yagiz in diving into real-world examples of how a performance engineer optimizes Node.js core code — with techniques that’ll be useful to you for all your applications. Yagiz Nizipli will share technical and funny details about the dark side of optimizations and how to prioritize optimizing what needs it most.",
		people: [peopleBySlug["yagiz-nizipli"]],
		slug: "talk-yagiz-nizipli",
		tags: ["Node.js", "Performance", "C++", "JavaScript"],
		talkFormat: "Lightning",
		title: "Node.js Core Performance Optimizations, Revealed",
	},
	"workshop-dan-and-aaron": {
		description:
			"Your business logic is important - but it requires so many service calls! Internal services, external services, retries, timeouts... Keeping track of all the failure points and logic can become a nightmare in larger applications. Especially for sensitive transactions such as money or personal data.\n\nIntroducing durable execution: the ability to write independent tasks that manage their own retry and timeout behavior. Applications built on these tasks become more traceable and understandable by nature, allowing you to build up reliable business applications with confidence and ease.\n\nJoin Dan Farrelly, CTO and co-founder of Inngest, and Aaron Harper, engineer at Inngest, as they show us how to make an application built on durable execution. You’ll learn how to get starting using an engine such as Inngest, along with great general tips and tricks you can apply in our own codebases.",
		people: [peopleBySlug["dan-farrelly"], peopleBySlug["aaron-harper"]],
		slug: "workshop-dan-and-aaron",
		tags: [
			"Architecture",
			"Durable Execution",
			"Microservices",
			"Task Management",
			"Tracing",
		],
		talkFormat: "Workshop",
		title: "Building Resilient Applications with Durable Execution",
	},
	"workshop-katerina-and-max": {
		description:
			"You will leave this workshop having built and installed a custom VSCode _and_ JetBrains extension! Learn how to enchant your Editor in a \\(seasonally witch-themed!\\) deep dive into Editor plugins and what it takes to build one. You will gain hands-on experience with [Nx](https://nx.dev/) and how you can use it to compose a clean architecture in a complex repo.\n\nWe’ve learned a lot in the process of building and maintaining both [Nx](https://nx.dev/) and [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console), our editor extension - we’re ready to share our best tips and tricks!\n\nIf you want to learn more about Nx or if you’ve ever thought to yourself “I wish someone at my company could make an editor extension” then this workshop is for you! Come and see how easy it is to get started.",
		people: [peopleBySlug["katerina-skroumpelou"], peopleBySlug["max-kless"]],
		slug: "workshop-katerina-and-max",
		tags: [
			"Editor Extensions",
			"Language Server Protocol",
			"TypeScript",
			"Kotlin",
			"VS Code",
			"JetBrains",
		],
		talkFormat: "Workshop",
		title: "Build Editor Extensions with the Makers of Nx Console",
	},
};
