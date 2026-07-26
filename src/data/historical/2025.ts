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

import { PersonInfo, SessionInfo } from "./types";

export const peopleBySlug = {
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
} satisfies Record<string, PersonInfo>;

export const sessionsBySlug: Record<string, SessionInfo> = {
	"a-world-class-local-dev-loop-with-aspire": {
		description: `This talk will explore the pain frontend developers face when building modern, distributed applications—where a simple UI might rely on a web of APIs, databases, background workers, and cloud services. We’ll start by framing the problem: why local development for these complex systems often feels slow, fragile, and frustrating, especially when the frontend team is expected to test and iterate quickly.

From there, we’ll dive into Aspire, a new dev-first toolkit designed to simplify local development in multi-service apps. We’ll walk through how Aspire can spin up your full stack—including frontend apps, backend services, containers, and infrastructure dependencies—with a single command. You’ll see how it makes observability first-class with a built-in dashboard for service health, logs, and traces—all powered by OpenTelemetry, no manual setup required.

We’ll also cover what makes Aspire developer-friendly: no YAML, no cloud dependencies, and no forced replatforming. Whether you’re working in JavaScript, Go, or something else entirely, Aspire is designed to meet you where you are and make your local dev loop "just work".

By the end of the session, you’ll walk away with a clear understanding of how Aspire fits into a modern frontend workflow, how it can save hours of setup and debugging time, and how it brings visibility and simplicity to local development in distributed systems.`,
		people: [peopleBySlug["maddy-montaquila"]],
		slug: "a-world-class-local-dev-loop-with-aspire",
		tags: ["DotNet", "TypeScript"],
		title: "A World Class Local Dev Loop with Aspire",
	},
	"aot-compiling-typescript-to-wasm-and-native": {
		description: `Compiling JavaScript ahead-of-time has long been dismissed as it is such a dynamic language, but lately especially thanks to TypeScript it is becoming more and more regarded as one of the language's potential future paths. Ahead-of-time allows for performance much better than traditional interpreters, while also being more secure and using less resources than just-in-time.

Porffor is an upcoming open-source project which experiments with exactly this. It can compile JS and TS to Wasm and native completely ahead-of-time, not just shipping a runtime. It can even utilize TypeScript's type annotations as compiler optimization hints! While it is still early, it has already shown promising potential and interest from developers throughout the ecosystem. This talk will expand upon it by introducing it, deep-diving into internals, and live demos!`,
		people: [peopleBySlug["oliver-medhurst"]],
		slug: "aot-compiling-typescript-to-wasm-and-native",
		tags: ["TypeScript", "WebAssembly"],
		title: "AoT Compiling TypeScript to WASM and Native",
	},
	"catch-accessibility-issues-at-the-source-with-storybook": {
		description: `Accessibility is often an afterthought in software development. We believe this is because testing itself is out of sync with modern development workflows.

1. Disconnected from development: Accessibility audits are often separate processes managed by QA or external auditors. This is detached from the developers prioritizing and implementing fixes.
2. Too noisy: Testing is often at the page level which generates repetitive issues. One component-level violation quickly multiplies across hundreds of pages, drowning developers in unnecessary notifications.
3. Blocking: Most organizations have a mountain of accessibility debt. It’s not realistic to stop work to fix every preexisting issue. This leaves teams with a dilemma, block CI/CD on a11y issues which stops development or leave a11y out of the dev workflow.

There's a way to integrate accessibility into the developer workflow that's practical and effective. We recommend ensuring that the core building blocks of your app – components – are accessible. As you assemble components into pages, your pages are more likely to be accessible too. Use CI/CD to flag accessibility issues in components automatically.

This talk introduces Storybook's accessibility testing workflow to help developers pinpoint the root cause of issues and make compliance an integrated part of software development.
		`,
		people: [peopleBySlug["dominic-nguyen"]],
		slug: "catch-accessibility-issues-at-the-source-with-storybook",
		tags: ["Accessibility", "Documentation"],
		title: "Catch Accessibility Issues at the Source with Storybook",
	},
	"cross-browser-devtools-with-webextensions": {
		description: `Have you ever used the DevTools extensions for React, Angular or Svelte and wondered how they work? Had an idea for the information you would expose to developers working on your product or using your framework or library?

In this talk, we'll dive into the world of WebExtensions - this is a cross-browser technology that lets you extend your browser with new tooling and features. You can get started with just HTML, CSS and JavaScript - and it really does take just a few lines of code. If you'd like, you can add WASM into the mix as well!

After touching on some technical details, I'll also tell you about the W3C WebExtensions Community Group. This is where we're working to continue building the platform - and if you're interested, you can get involved.`,
		people: [peopleBySlug["oliver-dunk"]],
		slug: "cross-browser-devtools-with-webextensions",
		tags: ["Browsers", "DevTools", "Extensions"],
		title: "Cross-Browser DevTools with WebExtensions",
	},
	"effect-type-safe-errors-and-dependency-injection": {
		description: `Building production-grade applications forces us to wrestle with two perennial challenges: robust error handling and managing dependencies. Traditionally, we surface these issues at runtime, only to discover a missing service or unhandled failure path long after we’ve shipped. In this session, we’ll flip that script: we’ll use TypeScript’s type system to catch holes in our logic _before_ they become bugs in production.

We’ll start by unpacking Effect’s core abstraction - computations as values - which are parameterised by success, error, and requirement types. You'll see how TypeScript’s red squiggles evolve from distractions in the IDE into explicit contracts that guide your code and eliminate boilerplate — dramatically improving your day-to-day developer experience.

You'll observe how tracking failure scenarios and application requirements at the type level naturally guides us towards more composable APIs. By the end, you’ll be able to glance at a type signature and instantly grasp every way it might fail and everything it needs to run.

Finally, we’ll cast an eye forward to the future of Effect's dev tooling. Armed with rich, type-level metadata about your app’s effects, language services can surface smarter diagnostics and auto-completions.

You’ll leave armed not just with patterns to ship bulletproof, maintainable code today, but with the vision of the next-generation devtools support that makes squiggles your friend—not your foe.`,
		people: [peopleBySlug["mattia-manzati"]],
		slug: "effect-type-safe-errors-and-dependency-injection",
		tags: ["Architecture", "TypeScript"],
		title: "Effect: Type-Safe Errors and Dependency Injection",
	},
	"electrons-internal-tooling-open-source-at-scale": {
		description: `Automation can make or break a team's effectiveness, but knowing what to automate—and when—is just as important as the tools themselves. In this talk, we'll take a deep dive into how the Electron team approaches automation: the guiding principles we use to decide when it's worth building a tool, and how our homegrown automation has helped us stay productive while maintaining a complex, fast-moving project.

We'll take a look at real-world examples of how we've improved our workflows, including our TypeScript types generator, permissions automation, our publishing workflow, backport systems, and automated weekly Chromium version sync PRs. We'll also talk about how automation can help maintain norms and project culture, and why well-designed automation helps us focus on the work that truly matters.

If you've ever wondered how to scale developer efficiency without drowning in overhead, or how to make automation work for your team instead of against it, this talk will give you the framework to decide what's worth automating—and what's better left manual.`,
		people: [peopleBySlug["shelley-vohr"]],
		slug: "electrons-internal-tooling-open-source-at-scale",
		tags: ["C++", "Node.js", "Open Source", "TypeScript"],
		title: "Electron's Internal Tooling: Open Source at Scale",
	},
	"javascript-framework-cage-match": {
		description: `I built out the same project in 5 different frameworks: RedwoodJS, NextJS App Router, NextJS Pages Router, Astro, Remix, and SvelteKit. Which JavaScript framework is "the best"? Well, it depends, of course!

* I’ll recognize the key differences within each of the framework, the ways I subjectively and objectively compared each, and the lessons that I learned along the way.
* A large factor in choosing a framework is the developer experience. Most of these frameworks are built on top of React. At their core they are the same. But, the experience and the patterns each framework implements should enable developers, allowing them to focus on harder more complex, business problems.
* I'll place a significant focus on Sentry and their dev tooling, demonstrating how their tools have contributed to a non-biased perspective and conclusions.

Developer experience and tooling play a large role in which framework is "the best" for you. I've also partnered with Sentry, using their tools to form non-biased opinions.`,
		people: [peopleBySlug["amy-dutton"]],
		slug: "javascript-framework-cage-match",
		tags: ["Astro", "Next.js", "React", "Remix", "TypeScript"],
		title: "JavaScript Framework Cage Match",
	},
	"jsr-designing-package-registry-module-resolution": {
		description: `The Deno JavaScript runtime’s explicit module resolution was reaching its limits. While publishing modules to deno.land/x provided a great developer experience, it also presented challenges. A better solution was needed.

This talk will explore the design decisions behind JSR, the open-source package registry for JavaScript and TypeScript. It will focus on the low-level details of JSR's package and module resolution in Deno. The pros and cons of HTTPS specifiers, npm, and the current JSR approach will be discussed, along with the technical challenges that remain.

The talk will also include a brief overview of the Rust crates powering JSR resolution and a demo showing how to leverage this resolution and loading outside of Deno.`,
		people: [peopleBySlug["david-sherret"]],
		slug: "jsr-designing-package-registry-module-resolution",
		tags: ["Deno", "Open Source", "Rust", "TypeScript"],
		title: "JSR: Designing Package Registry Module Resolution",
	},
	"make-tools-that-people-love": {
		description: `As a developer and open-source maintainer that work fully in public, I’ve always been fascinated by what makes tools stand out—not just for their functionality, but because people genuinely love using them. In this talk, I’ll share what I’ve learned about building tools that delight developers. From small UX details to big-picture design decisions, I’ll walk through how empathy, iteration, and community feedback have shaped the way I approach developer experience. I’ll also share some practical methods to help you measure and evaluate your own ideas. Whether you’re creating a library, a framework, or something entirely new, I hope to leave you with ideas and inspiration for making tools that people don’t just use — they advocate for.`,
		people: [peopleBySlug["anthony-fu"]],
		slug: "make-tools-that-people-love",
		tags: ["Community Building", "Design", "Open Source"],
		title: "Make Tools That People Love",
	},
	"quality-code-samples-make-everything-better": {
		description: `Sample code is code for others to use. It is usually code that lives in documentation, quick-start guides, or blog posts and videos. This talk will explain the difference between creating code for proof-of-concept applications, creating code for maintainable systems, and creating sample code.

Additionally, it will cover the following:

- An overview of the process of creating samples
- How to reach developers at different stages in their journey with one code sample
- Key considerations when writing sample code, such as how will your code sample age over time
- Tips and tricks for ensuring quality code samples, such as starting from a blank environment and thinking of your code as paragraphs in a story
- Creating a review process for sample code

As developers, we often build tools for others. In this capacity, we aim to reach people at various stages of their development journey. This talk will focus on the processes of creating sample code and the essential elements to consider to ensure your code samples are accessible to anyone who wants to build with your product.`,
		people: [peopleBySlug["jessica-garson"]],
		slug: "quality-code-samples-make-everything-better",
		tags: ["Developer Relations", "Documentation", "Technical Writing"],
		title: "Quality Code Samples Make Everything Better",
	},
	"rolldown-how-vite-bundles-at-the-speed-of-rust": {
		description: `Rolldown is a new Rust-based bundler built to become the default in Vite. It aims to bring faster builds, advanced optimization features, and a more modern architecture, all of it while staying compatible with the existing Rollup plugin ecosystem and offering a simple and flexible API.

While it can be used as standalone tool to bundle any kind of JavaScript application, Rolldown will be used mostly as the underlying Vite bundler, replacing esbuild and Rollup. And beyond that, more improvements, such as a fully bundled Vite dev server, are on the way and only possible through Rolldown.

But you might wonder: why another bundler? Couldn't we just fork Rollup and "rustify it"? Why even replace esbuild and Rollup in Vite? And what powers Rolldown under the hood?
All these questions will be answered throughout the talk, as well as showcasing intriguing real-world performance improvements, and how you can try out Rolldown straight after (or even *during*) the presentation.

After the presentation you'll have a top-level understanding of Rolldown. You know why the bundler was created, and how it can help you build faster web applications.`,
		people: [peopleBySlug["alexander-lichter"]],
		slug: "rolldown-how-vite-bundles-at-the-speed-of-rust",
		tags: ["Parsing", "Rust", "TypeScript"],
		title: "Rolldown: How Vite Bundles at the Speed of Rust",
	},
	"snapshot-tests-in-gleam-smarter-testing-less work": {
		description: `This talk will cover the ins and outs of snapshot testing: what it is, why is it useful, how it works and, most importantly, how to use it effectively. To be a bit more specific:

- We'll start by having a look at a seemingly standard unit test (all the code examples will be in Gleam! But the code is as simple as it can be, even for the untrained eye), allowing us to highlight some pain points we all face when writing unit tests
- We'll introduce snapshot testing using "birdie", a Gleam library I'm the author of. It will be clear how this can address many of the DX challenges we've highlighted before
- Driven by real world examples, we'll have a look at how to craft the best possible snapshots to make our testing life easier
- We'll cover some snapshot testing best practices that I've learned when working on the Gleam compiler
- On an ending note, we'll talk about other DX lessons I've learned developing this library and what to look out for when building software that others are going to use

I think snapshot testing is criminally underused and -hot take- should actually be the go-to testing technique when writing unit test assertions. I think it would be quite interesting for folks to see how it's used and get a feeling for it by looking at real world examples, some of those coming directly from the Gleam compiler!`,
		people: [peopleBySlug["giacomo-cavalieri"]],
		slug: "snapshot-tests-in-gleam-smarter-testing-less work",
		tags: ["Debugging", "Testing"],
		title: "Snapshot Tests in Gleam: Smarter Testing, Less Work",
	},
	"source-maps-how-does-the-magic-work": {
		description: `Your app breaks. Users are reporting problems. Tests are failing. You look at your code, and it all seems correct at a first glance (you wrote it, how could it be anything other than perfect!). Luckily, we have a stack trace that is going to tell us where the problem is: in function \`rB()\`, file \`cHuNk-h5tY7y.js\`, line \`1\`, column \`2734942\`, in \`rB(x=(y,!0)){return-c||x,[pH]}\`. You remember writing _exactly_ that code yesterday evening, right?

Most JavaScript code nowadays goes through a myriad of tools from when it leaves our fingertips to when it actually runs in a browser: it gets transformed, compressed, ripped apart, and put back together in pieces upside down. All these tools bring great benefits, but at a cost: debugging becomes incredibly hard.

The good news? We have a solution for this: source maps! And they are becoming _even better_.

Source maps are a set of instructions that the various build tools generate to tell the debugging tools how to _undo_ the transformations that the code went through, so that we can pretend we are debugging the code we wrote rather than the code that is running. Their capabilities have been stagnant for many years, but recently TC39 started a group with the goal of standardizing and expanding what they are capable of. Let's learn together how they work, and what's coming next!
`,
		people: [peopleBySlug["nicolò-ribaudo"]],
		slug: "source-maps-how-does-the-magic-work",
		tags: ["Debugging Tools", "Standards"],
		title: "Source Maps: How Does the Magic Work?",
	},
	"tech-broke-my-heart": {
		description: `The agenda of this talk includes exploring the severe impact of work-induced stress on physical health, recognizing the signs of burnout, and understanding the importance of mental and physical well-being in achieving sustainable success. I will share excerpts from our Developer Health Operating System, a framework we developed to guide developers in burnout recovery, prevention, and optimum performance at work.

I will share a deeply personal and transformative journey that began with an unexpected diagnosis of Inappropriate Sinus Tachycardia (IST). At 29, I found myself sitting in a cardiologist’s office, grappling with a condition where my heart rate spiked unpredictably, severely affecting my quality of life. This diagnosis, brought on by the extreme stress of a toxic work environment, forced me to reevaluate my approach to both life and work. Despite working for a company I loved, the constant exposure to negative communication and bureaucratic hurdles made my heart race and my chest hurt, especially during scrum ceremonies. Ultimately, I had to leave not just one, but two jobs to protect my health, leading to an existential crisis about my future in the tech industry.


The takeaways for the audience will be the importance of listening to your body and mind, the value of incorporating restful work into your work routine, and the realization that working in a sustainable way allows us to be even more ambitious. I hope to inspire developers to take intentional steps towards prioritizing their health, and ultimately creating a work environment that supports their well-being. The goal is to empower developers to achieve their professional aspirations without compromising their health, proving that we build better when we feel better.`,
		people: [peopleBySlug["michelle-bakels"]],
		slug: "tech-broke-my-heart",
		tags: ["Inclusivity", "Mental Health"],
		title: "Tech Broke My Heart",
	},
	"the-lockfiles-phd-you-never-got": {
		description: `At some point during my schooling, I realized that each year I would forget most of what I learned the year before. How much do you remember from your compiler theory class, for example? For most people, not too much -- but you did get a sense that the problems were harder than expected. And that compilers are really important and need to be correct. (Same for your node_modules folder!) As a student, I became lazy: I started to focus my energy on cultivating knowledge that I would remember years later, while downplaying details that I expected to forget soon. This talk tries to achieve something like that for NPM version algebra: The topic is deep, but a few core concepts can take you a long way!

The segment will start by showing that SemVer and lockfiles go much deeper than most people think. I'll share just enough detail to demolish those naive assumptions that seem so ubiquitous: misconceptions that work okay for small projects, but lead to increasing frustration as your codebase grows. We'll review the history of NPM/PNPM/Yarn/Bun/Deno/etc which each brought new inventions. I’ll show that there’s really no escape from confronting version complexity, unless you’re willing to completely eliminate side-by-side versions. Then we’ll look at the Lockfile Explorer app, its jargon ("optional peer dependency doppelgangers", "determinants" , etc), and give some examples of how this tool helps to visualize and investigate common situations. Lastly I’ll present a punch list of general tips and strategies to keep you out of trouble even if you don't use Lockfile Explorer.

Although this talk won’t provide a PhD education, it can perhaps bring some humility -- and hope -- to a widely misunderstood topic.`,
		people: [peopleBySlug["pete-gonzalez"]],
		slug: "the-lockfiles-phd-you-never-got",
		tags: ["Dependency Management", "Package Managers"],
		title: "The Lockfiles PhD You Never Got",
	},
	"wasi-building-blocks-for-webassembly": {
		description: `This talk will be an introduction to WASI 0.2, the Wasm component specification, with practical applications for what that enables, what a dev workflow for composable wasm development looks like, and speculation about where I think this is all going, delivered with a heavy dose of humor.

What does it mean for us devs if in the future, we use any programming language to write a program that runs on any device in harmony with any other programming language? Is this actually a good thing? Is the future already here? Was Gary Bernhardt right that everything is just JavaScript now?`,
		people: [peopleBySlug["dylan-goings"]],
		slug: "wasi-building-blocks-for-webassembly",
		tags: ["Cross-Language", "WebAssembly"],
		title: "WASI: Building Blocks for WebAssembly",
	},
	"why-and-how-we-ported-typescript-to-go": {
		description: `In March 2025, we surprised everyone by announcing TypeScript's port to Go. This is a certified Big Deal™, given the scale, complexity, and importance of the TypeScript toolchain.

From the beginning, TypeScript has been written in TypeScript; like most languages, we're self hosting. We work on our own toolchain, fix our own bugs. But as time went on, we faced the challenges with the compiler's performance, largely inherent to the implementation language itself. We squeezed every ounce of performance we could, but we needed to scale further. And through experimentation and testing, we decided to port TypeScript to Go, achieving a 10x faster TypeScript.

In this talk, we'll go over the why and the how. Why Go turned out to be the perfect language for the port, why it was sometimes hard to do (but also sometimes easy), how we actually were able to port 150k lines of code and 90k tests, and how this will affect you!`,
		people: [peopleBySlug["jake-bailey"]],
		slug: "why-and-how-we-ported-typescript-to-go",
		tags: ["Go", "Open Source", "Parsing", "Rust", "TypeScript"],
		title: "Why and How We Ported TypeScript to Go",
	},
	"why-we-made-tsdoc-and-how": {
		description: `TSDoc is a formal syntax for describing API's using /** */ comments. But so are markdown and JSDoc and TypeDoc - what's the difference? I'll talk about that briefly, but what I'd like to focus on is the requirements that TSDoc faced, and how we approached its design which ultimately became the centerpiece of the API Extractor tool.

In a nutshell, TSDoc combined four requirements:

[1] We wanted to put important semantic directives in comments (e.g. this API property is internal, remove it from the .d.ts signatures), not merely formatting markup (e.g. render this text with a console font).

[2] We had multiple tools that needed to parse the same code comments and agree about their syntax, and some tools needed custom syntax extensions.

[3] These tools often ran in downstream pipelines, so if a comment was parsed incorrectly, engineers wouldn't notice the problem until later.

Actually, C#'s triple slash comments (///) handled these requirements very elegantly using XML syntax.

But TSDoc faced an important extra requirement:

[4] The ecosystem had already standardized on JSDoc/Markdown notation, so nobody wanted to adopt XML.

When we tried to combine CommonMark with JSDoc syntax, we encountered a telescoping set of grammars HTML -> CommonMark -> JSDoc that led to lots of counterintuitive problems. It took months to wrangle all these pieces into a design that didn't explode with complexity. These exercise really brought to light how other documentation systems don't handle these problems at all. But they do fairly well by dismissing some of these requirements in different ways. The talk will conclude by looking forward to possible ideas to improve TSDoc in the future, as well as a mental framework for thinking about software design when it involves custom syntaxes.`,
		people: [peopleBySlug["pete-gonzalez"]],
		slug: "why-we-made-tsdoc-and-how",
		tags: ["Documentation", "TypeScript"],
		title: "Why We Made TSDoc (and How)",
	},
	"zero-to-squiggle-with-the-language-server-protocol": {
		description: `
Join me for an interactive journey, where we build an LSP from scratch LIVE on stage.
We'll go over all the basics so you can go from not know what the acronym stands for to creating our own LSP that puts those little red squiggles inside of our editor.
We won't be using any fancy libraries, complicated abstractions, or obfuscating patterns.
Instead, we'll start from scratch and step-by-step understand our tools better... by building one!
		`,
		people: [peopleBySlug["tj-devries"]],
		slug: "zero-to-squiggle-with-the-language-server-protocol",
		tags: ["DevTools", "Language Server Protocol"],
		title: "Zero to Squiggle with the Language Server Protocol",
	},
};
