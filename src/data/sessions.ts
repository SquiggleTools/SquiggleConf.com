import { SpeakerInfo, speakersBySlug } from "./speakers.js";

// TODO: Source this dynamically using the scripts repo

export interface SessionInfo {
	channel: string;
	description: string;

	/**
	 * Override of any speaker qualification, in case a speaker gives multiple talks.
	 */
	qualification?: string;

	slug: string;
	speakers: SpeakerInfo[];
	tags: string[];
	title: string;
	type: "full" | "medium";
}

export const sessionsBySlug: Record<string, SessionInfo> = {
	"a-world-class-local-dev-loop-with-aspire": {
		channel: "talk-maddy-montaquila",
		description: `This talk will explore the pain frontend developers face when building modern, distributed applications—where a simple UI might rely on a web of APIs, databases, background workers, and cloud services. We’ll start by framing the problem: why local development for these complex systems often feels slow, fragile, and frustrating, especially when the frontend team is expected to test and iterate quickly.

From there, we’ll dive into Aspire, a new dev-first toolkit designed to simplify local development in multi-service apps. We’ll walk through how Aspire can spin up your full stack—including frontend apps, backend services, containers, and infrastructure dependencies—with a single command. You’ll see how it makes observability first-class with a built-in dashboard for service health, logs, and traces—all powered by OpenTelemetry, no manual setup required.

We’ll also cover what makes Aspire developer-friendly: no YAML, no cloud dependencies, and no forced replatforming. Whether you’re working in JavaScript, Go, or something else entirely, Aspire is designed to meet you where you are and make your local dev loop "just work".

By the end of the session, you’ll walk away with a clear understanding of how Aspire fits into a modern frontend workflow, how it can save hours of setup and debugging time, and how it brings visibility and simplicity to local development in distributed systems.`,
		slug: "a-world-class-local-dev-loop-with-aspire",
		speakers: [speakersBySlug["maddy-montaquila"]],
		tags: ["DotNet", "TypeScript"],
		title: "A World Class Local Dev Loop with Aspire",
		type: "medium",
	},
	"aot-compiling-typescript-to-wasm-and-native": {
		channel: "talk-oliver-medhurst",
		description: `Compiling JavaScript ahead-of-time has long been dismissed as it is such a dynamic language, but lately especially thanks to TypeScript it is becoming more and more regarded as one of the language's potential future paths. Ahead-of-time allows for performance much better than traditional interpreters, while also being more secure and using less resources than just-in-time.

Porffor is an upcoming open-source project which experiments with exactly this. It can compile JS and TS to Wasm and native completely ahead-of-time, not just shipping a runtime. It can even utilize TypeScript's type annotations as compiler optimization hints! While it is still early, it has already shown promising potential and interest from developers throughout the ecosystem. This talk will expand upon it by introducing it, deep-diving into internals, and live demos!`,
		slug: "aot-compiling-typescript-to-wasm-and-native",
		speakers: [speakersBySlug["oliver-medhurst"]],
		tags: ["TypeScript", "WebAssembly"],
		title: "AoT Compiling TypeScript to WASM and Native",
		type: "medium",
	},
	"catch-accessibility-issues-at-the-source-with-storybook": {
		channel: "talk-dominic-nguyen",
		description: `Accessibility is often an afterthought in software development. We believe this is because testing itself is out of sync with modern development workflows.

1. Disconnected from development: Accessibility audits are often separate processes managed by QA or external auditors. This is detached from the developers prioritizing and implementing fixes.
2. Too noisy: Testing is often at the page level which generates repetitive issues. One component-level violation quickly multiplies across hundreds of pages, drowning developers in unnecessary notifications.
3. Blocking: Most organizations have a mountain of accessibility debt. It’s not realistic to stop work to fix every preexisting issue. This leaves teams with a dilemma, block CI/CD on a11y issues which stops development or leave a11y out of the dev workflow.

There's a way to integrate accessibility into the developer workflow that's practical and effective. We recommend ensuring that the core building blocks of your app – components – are accessible. As you assemble components into pages, your pages are more likely to be accessible too. Use CI/CD to flag accessibility issues in components automatically.

This talk introduces Storybook's accessibility testing workflow to help developers pinpoint the root cause of issues and make compliance an integrated part of software development.
		`,
		slug: "catch-accessibility-issues-at-the-source-with-storybook",
		speakers: [speakersBySlug["dominic-nguyen"]],
		tags: ["Accessibility", "Documentation"],
		title: "Catch Accessibility Issues at the Source with Storybook",
		type: "medium",
	},
	"cross-browser-devtools-with-webextensions": {
		channel: "talk-oliver-dunk",
		description: `Have you ever used the DevTools extensions for React, Angular or Svelte and wondered how they work? Had an idea for the information you would expose to developers working on your product or using your framework or library?

In this talk, we'll dive into the world of WebExtensions - this is a cross-browser technology that lets you extend your browser with new tooling and features. You can get started with just HTML, CSS and JavaScript - and it really does take just a few lines of code. If you'd like, you can add WASM into the mix as well!

After touching on some technical details, I'll also tell you about the W3C WebExtensions Community Group. This is where we're working to continue building the platform - and if you're interested, you can get involved.`,
		slug: "cross-browser-devtools-with-webextensions",
		speakers: [speakersBySlug["oliver-dunk"]],
		tags: ["Browsers", "DevTools", "Extensions"],
		title: "Cross-Browser DevTools with WebExtensions",
		type: "medium",
	},
	"effect-type-safe-errors-and-dependency-injection": {
		channel: "talk-mattia-manzati",
		description: `Building production-grade applications forces us to wrestle with two perennial challenges: robust error handling and managing dependencies. Traditionally, we surface these issues at runtime, only to discover a missing service or unhandled failure path long after we’ve shipped. In this session, we’ll flip that script: we’ll use TypeScript’s type system to catch holes in our logic _before_ they become bugs in production.

We’ll start by unpacking Effect’s core abstraction - computations as values - which are parameterised by success, error, and requirement types. You'll see how TypeScript’s red squiggles evolve from distractions in the IDE into explicit contracts that guide your code and eliminate boilerplate — dramatically improving your day-to-day developer experience.

You'll observe how tracking failure scenarios and application requirements at the type level naturally guides us towards more composable APIs. By the end, you’ll be able to glance at a type signature and instantly grasp every way it might fail and everything it needs to run.

Finally, we’ll cast an eye forward to the future of Effect's dev tooling. Armed with rich, type-level metadata about your app’s effects, language services can surface smarter diagnostics and auto-completions.

You’ll leave armed not just with patterns to ship bulletproof, maintainable code today, but with the vision of the next-generation devtools support that makes squiggles your friend—not your foe.`,
		slug: "effect-type-safe-errors-and-dependency-injection",
		speakers: [speakersBySlug["mattia-manzati"]],
		tags: ["Architecture", "TypeScript"],
		title: "Effect: Type-Safe Errors and Dependency Injection",
		type: "full",
	},
	"electrons-internal-tooling-open-source-at-scale": {
		channel: "talk-shelley-vohr",
		description: `Automation can make or break a team's effectiveness, but knowing what to automate—and when—is just as important as the tools themselves. In this talk, we'll take a deep dive into how the Electron team approaches automation: the guiding principles we use to decide when it's worth building a tool, and how our homegrown automation has helped us stay productive while maintaining a complex, fast-moving project.

We'll take a look at real-world examples of how we've improved our workflows, including our TypeScript types generator, permissions automation, our publishing workflow, backport systems, and automated weekly Chromium version sync PRs. We'll also talk about how automation can help maintain norms and project culture, and why well-designed automation helps us focus on the work that truly matters.

If you've ever wondered how to scale developer efficiency without drowning in overhead, or how to make automation work for your team instead of against it, this talk will give you the framework to decide what's worth automating—and what's better left manual.`,
		slug: "electrons-internal-tooling-open-source-at-scale",
		speakers: [speakersBySlug["shelley-vohr"]],
		tags: ["C++", "Node.js", "Open Source", "TypeScript"],
		title: "Electron's Internal Tooling: Open Source at Scale",
		type: "full",
	},
	"javascript-framework-cage-match": {
		channel: "talk-amy-dutton",
		description: `I built out the same project in 5 different frameworks: RedwoodJS, NextJS App Router, NextJS Pages Router, Astro, Remix, and SvelteKit. Which JavaScript framework is "the best"? Well, it depends, of course!

* I’ll recognize the key differences within each of the framework, the ways I subjectively and objectively compared each, and the lessons that I learned along the way.
* A large factor in choosing a framework is the developer experience. Most of these frameworks are built on top of React. At their core they are the same. But, the experience and the patterns each framework implements should enable developers, allowing them to focus on harder more complex, business problems.
* I'll place a significant focus on Sentry and their dev tooling, demonstrating how their tools have contributed to a non-biased perspective and conclusions.

Developer experience and tooling play a large role in which framework is "the best" for you. I've also partnered with Sentry, using their tools to form non-biased opinions.`,
		slug: "javascript-framework-cage-match",
		speakers: [speakersBySlug["amy-dutton"]],
		tags: ["Astro", "Next.js", "React", "Remix", "TypeScript"],
		title: "JavaScript Framework Cage Match",
		type: "full",
	},
	"jsr-designing-package-registry-module-resolution": {
		channel: "talk-david-sherret",
		description: `The Deno JavaScript runtime’s explicit module resolution was reaching its limits. While publishing modules to deno.land/x provided a great developer experience, it also presented challenges. A better solution was needed.

This talk will explore the design decisions behind JSR, the open-source package registry for JavaScript and TypeScript. It will focus on the low-level details of JSR's package and module resolution in Deno. The pros and cons of HTTPS specifiers, npm, and the current JSR approach will be discussed, along with the technical challenges that remain.

The talk will also include a brief overview of the Rust crates powering JSR resolution and a demo showing how to leverage this resolution and loading outside of Deno.`,
		slug: "jsr-designing-package-registry-module-resolution",
		speakers: [speakersBySlug["david-sherret"]],
		tags: ["Deno", "Open Source", "Rust", "TypeScript"],
		title: "JSR: Designing Package Registry Module Resolution",
		type: "full",
	},
	"make-tools-that-people-love": {
		channel: "talk-anthony-fu",
		description: `As a developer and open-source maintainer that work fully in public, I’ve always been fascinated by what makes tools stand out—not just for their functionality, but because people genuinely love using them. In this talk, I’ll share what I’ve learned about building tools that delight developers. From small UX details to big-picture design decisions, I’ll walk through how empathy, iteration, and community feedback have shaped the way I approach developer experience. I’ll also share some practical methods to help you measure and evaluate your own ideas. Whether you’re creating a library, a framework, or something entirely new, I hope to leave you with ideas and inspiration for making tools that people don’t just use — they advocate for.`,
		slug: "make-tools-that-people-love",
		speakers: [speakersBySlug["anthony-fu"]],
		tags: ["Community Building", "Design", "Open Source"],
		title: "Make Tools That People Love",
		type: "full",
	},
	"quality-code-samples-make-everything-better": {
		channel: "talk-jessica-garson",
		description: `Sample code is code for others to use. It is usually code that lives in documentation, quick-start guides, or blog posts and videos. This talk will explain the difference between creating code for proof-of-concept applications, creating code for maintainable systems, and creating sample code.

Additionally, it will cover the following:

- An overview of the process of creating samples
- How to reach developers at different stages in their journey with one code sample
- Key considerations when writing sample code, such as how will your code sample age over time
- Tips and tricks for ensuring quality code samples, such as starting from a blank environment and thinking of your code as paragraphs in a story
- Creating a review process for sample code

As developers, we often build tools for others. In this capacity, we aim to reach people at various stages of their development journey. This talk will focus on the processes of creating sample code and the essential elements to consider to ensure your code samples are accessible to anyone who wants to build with your product.`,
		slug: "quality-code-samples-make-everything-better",
		speakers: [speakersBySlug["jessica-garson"]],
		tags: ["Developer Relations", "Documentation", "Technical Writing"],
		title: "Quality Code Samples Make Everything Better",
		type: "full",
	},
	"rolldown-how-vite-bundles-at-the-speed-of-rust": {
		channel: "talk-alexander-lichter",
		description: `Rolldown is a new Rust-based bundler built to become the default in Vite. It aims to bring faster builds, advanced optimization features, and a more modern architecture, all of it while staying compatible with the existing Rollup plugin ecosystem and offering a simple and flexible API.

While it can be used as standalone tool to bundle any kind of JavaScript application, Rolldown will be used mostly as the underlying Vite bundler, replacing esbuild and Rollup. And beyond that, more improvements, such as a fully bundled Vite dev server, are on the way and only possible through Rolldown.

But you might wonder: why another bundler? Couldn't we just fork Rollup and "rustify it"? Why even replace esbuild and Rollup in Vite? And what powers Rolldown under the hood?
All these questions will be answered throughout the talk, as well as showcasing intriguing real-world performance improvements, and how you can try out Rolldown straight after (or even *during*) the presentation.

After the presentation you'll have a top-level understanding of Rolldown. You know why the bundler was created, and how it can help you build faster web applications.`,
		slug: "rolldown-how-vite-bundles-at-the-speed-of-rust",
		speakers: [speakersBySlug["alexander-lichter"]],
		tags: ["Parsing", "Rust", "TypeScript"],
		title: "Rolldown: How Vite Bundles at the Speed of Rust",
		type: "full",
	},
	"snapshot-tests-in-gleam-smarter-testing-less work": {
		channel: "talk-giacomo-cavalieri",
		description: `This talk will cover the ins and outs of snapshot testing: what it is, why is it useful, how it works and, most importantly, how to use it effectively. To be a bit more specific:

- We'll start by having a look at a seemingly standard unit test (all the code examples will be in Gleam! But the code is as simple as it can be, even for the untrained eye), allowing us to highlight some pain points we all face when writing unit tests
- We'll introduce snapshot testing using "birdie", a Gleam library I'm the author of. It will be clear how this can address many of the DX challenges we've highlighted before
- Driven by real world examples, we'll have a look at how to craft the best possible snapshots to make our testing life easier
- We'll cover some snapshot testing best practices that I've learned when working on the Gleam compiler
- On an ending note, we'll talk about other DX lessons I've learned developing this library and what to look out for when building software that others are going to use

I think snapshot testing is criminally underused and -hot take- should actually be the go-to testing technique when writing unit test assertions. I think it would be quite interesting for folks to see how it's used and get a feeling for it by looking at real world examples, some of those coming directly from the Gleam compiler!`,
		slug: "snapshot-tests-in-gleam-smarter-testing-less work",
		speakers: [speakersBySlug["giacomo-cavalieri"]],
		tags: ["Debugging", "Testing"],
		title: "Snapshot Tests in Gleam: Smarter Testing, Less Work",
		type: "medium",
	},
	"source-maps-how-does-the-magic-work": {
		channel: "talk-nicolò-ribaudo",
		description: `Your app breaks. Users are reporting problems. Tests are failing. You look at your code, and it all seems correct at a first glance (you wrote it, how could it be anything other than perfect!). Luckily, we have a stack trace that is going to tell us where the problem is: in function \`rB()\`, file \`cHuNk-h5tY7y.js\`, line \`1\`, column \`2734942\`, in \`rB(x=(y,!0)){return-c||x,[pH]}\`. You remember writing _exactly_ that code yesterday evening, right?

Most JavaScript code nowadays goes through a myriad of tools from when it leaves our fingertips to when it actually runs in a browser: it gets transformed, compressed, ripped apart, and put back together in pieces upside down. All these tools bring great benefits, but at a cost: debugging becomes incredibly hard.

The good news? We have a solution for this: source maps! And they are becoming _even better_.

Source maps are a set of instructions that the various build tools generate to tell the debugging tools how to _undo_ the transformations that the code went through, so that we can pretend we are debugging the code we wrote rather than the code that is running. Their capabilities have been stagnant for many years, but recently TC39 started a group with the goal of standardizing and expanding what they are capable of. Let's learn together how they work, and what's coming next!
`,
		slug: "source-maps-how-does-the-magic-work",
		speakers: [speakersBySlug["nicolò-ribaudo"]],
		tags: ["Debugging Tools", "Standards"],
		title: "Source Maps: How Does the Magic Work?",
		type: "full",
	},
	"tech-broke-my-heart": {
		channel: "talk-michelle-bakels",
		description: `The agenda of this talk includes exploring the severe impact of work-induced stress on physical health, recognizing the signs of burnout, and understanding the importance of mental and physical well-being in achieving sustainable success. I will share excerpts from our Developer Health Operating System, a framework we developed to guide developers in burnout recovery, prevention, and optimum performance at work.

I will share a deeply personal and transformative journey that began with an unexpected diagnosis of Inappropriate Sinus Tachycardia (IST). At 29, I found myself sitting in a cardiologist’s office, grappling with a condition where my heart rate spiked unpredictably, severely affecting my quality of life. This diagnosis, brought on by the extreme stress of a toxic work environment, forced me to reevaluate my approach to both life and work. Despite working for a company I loved, the constant exposure to negative communication and bureaucratic hurdles made my heart race and my chest hurt, especially during scrum ceremonies. Ultimately, I had to leave not just one, but two jobs to protect my health, leading to an existential crisis about my future in the tech industry.


The takeaways for the audience will be the importance of listening to your body and mind, the value of incorporating restful work into your work routine, and the realization that working in a sustainable way allows us to be even more ambitious. I hope to inspire developers to take intentional steps towards prioritizing their health, and ultimately creating a work environment that supports their well-being. The goal is to empower developers to achieve their professional aspirations without compromising their health, proving that we build better when we feel better.`,
		slug: "tech-broke-my-heart",
		speakers: [speakersBySlug["michelle-bakels"]],
		tags: ["Inclusivity", "Mental Health"],
		title: "Tech Broke My Heart",
		type: "full",
	},
	"the-lockfiles-phd-you-never-got": {
		channel: "talk-pete-gonzalez",
		description: `At some point during my schooling, I realized that each year I would forget most of what I learned the year before. How much do you remember from your compiler theory class, for example? For most people, not too much -- but you did get a sense that the problems were harder than expected. And that compilers are really important and need to be correct. (Same for your node_modules folder!) As a student, I became lazy: I started to focus my energy on cultivating knowledge that I would remember years later, while downplaying details that I expected to forget soon. This talk tries to achieve something like that for NPM version algebra: The topic is deep, but a few core concepts can take you a long way!

The segment will start by showing that SemVer and lockfiles go much deeper than most people think. I'll share just enough detail to demolish those naive assumptions that seem so ubiquitous: misconceptions that work okay for small projects, but lead to increasing frustration as your codebase grows. We'll review the history of NPM/PNPM/Yarn/Bun/Deno/etc which each brought new inventions. I’ll show that there’s really no escape from confronting version complexity, unless you’re willing to completely eliminate side-by-side versions. Then we’ll look at the Lockfile Explorer app, its jargon ("optional peer dependency doppelgangers", "determinants" , etc), and give some examples of how this tool helps to visualize and investigate common situations. Lastly I’ll present a punch list of general tips and strategies to keep you out of trouble even if you don't use Lockfile Explorer.

Although this talk won’t provide a PhD education, it can perhaps bring some humility -- and hope -- to a widely misunderstood topic.`,
		qualification: "co-creator of Lockfile Explorer, engineer at TikTok",
		slug: "the-lockfiles-phd-you-never-got",
		speakers: [speakersBySlug["pete-gonzalez"]],
		// TODO: Fill in tags
		tags: ["Dependency Management", "Package Managers"],
		title: "The Lockfiles PhD You Never Got",
		type: "medium",
	},
	"wasi-building-blocks-for-webassembly": {
		channel: "talk-dylan-goings",
		description: `This talk will be an introduction to WASI 0.2, the Wasm component specification, with practical applications for what that enables, what a dev workflow for composable wasm development looks like, and speculation about where I think this is all going, delivered with a heavy dose of humor.

What does it mean for us devs if in the future, we use any programming language to write a program that runs on any device in harmony with any other programming language? Is this actually a good thing? Is the future already here? Was Gary Bernhardt right that everything is just JavaScript now?`,
		slug: "wasi-building-blocks-for-webassembly",
		speakers: [speakersBySlug["dylan-goings"]],
		tags: ["Cross-Language", "WebAssembly"],
		title: "WASI: Building Blocks for WebAssembly",
		type: "medium",
	},
	"why-and-how-we-ported-typescript-to-go": {
		channel: "talk-jake-bailey",
		description: `In March 2025, we surprised everyone by announcing TypeScript's port to Go. This is a certified Big Deal™, given the scale, complexity, and importance of the TypeScript toolchain.

From the beginning, TypeScript has been written in TypeScript; like most languages, we're self hosting. We work on our own toolchain, fix our own bugs. But as time went on, we faced the challenges with the compiler's performance, largely inherent to the implementation language itself. We squeezed every ounce of performance we could, but we needed to scale further. And through experimentation and testing, we decided to port TypeScript to Go, achieving a 10x faster TypeScript.

In this talk, we'll go over the why and the how. Why Go turned out to be the perfect language for the port, why it was sometimes hard to do (but also sometimes easy), how we actually were able to port 150k lines of code and 90k tests, and how this will affect you!`,
		slug: "why-and-how-we-ported-typescript-to-go",
		speakers: [speakersBySlug["jake-bailey"]],
		tags: ["Go", "Open Source", "Parsing", "Rust", "TypeScript"],
		title: "Why and How We Ported TypeScript to Go",
		type: "full",
	},
	"why-we-made-tsdoc-and-how": {
		channel: "talk-pete-gonzalez",
		description: `TSDoc is a formal syntax for describing API's using /** */ comments. But so are markdown and JSDoc and TypeDoc - what's the difference? I'll talk about that briefly, but what I'd like to focus on is the requirements that TSDoc faced, and how we approached its design which ultimately became the centerpiece of the API Extractor tool.

In a nutshell, TSDoc combined four requirements:

[1] We wanted to put important semantic directives in comments (e.g. this API property is internal, remove it from the .d.ts signatures), not merely formatting markup (e.g. render this text with a console font).

[2] We had multiple tools that needed to parse the same code comments and agree about their syntax, and some tools needed custom syntax extensions.

[3] These tools often ran in downstream pipelines, so if a comment was parsed incorrectly, engineers wouldn't notice the problem until later.

Actually, C#'s triple slash comments (///) handled these requirements very elegantly using XML syntax.

But TSDoc faced an important extra requirement:

[4] The ecosystem had already standardized on JSDoc/Markdown notation, so nobody wanted to adopt XML.

When we tried to combine CommonMark with JSDoc syntax, we encountered a telescoping set of grammars HTML -> CommonMark -> JSDoc that led to lots of counterintuitive problems. It took months to wrangle all these pieces into a design that didn't explode with complexity. These exercise really brought to light how other documentation systems don't handle these problems at all. But they do fairly well by dismissing some of these requirements in different ways. The talk will conclude by looking forward to possible ideas to improve TSDoc in the future, as well as a mental framework for thinking about software design when it involves custom syntaxes.`,
		qualification: "core maintainer of TSDoc",
		slug: "why-we-made-tsdoc-and-how",
		speakers: [speakersBySlug["pete-gonzalez"]],
		tags: ["Documentation", "TypeScript"],
		title: "Why We Made TSDoc (and How)",
		type: "medium",
	},
	"zero-to-squiggle-with-the-language-server-protocol": {
		channel: "talk-tj-devries",
		description: `
Join me for an interactive journey, where we build an LSP from scratch LIVE on stage.
We'll go over all the basics so you can go from not know what the acronym stands for to creating our own LSP that puts those little red squiggles inside of our editor.
We won't be using any fancy libraries, complicated abstractions, or obfuscating patterns.
Instead, we'll start from scratch and step-by-step understand our tools better... by building one!
		`,
		slug: "zero-to-squiggle-with-the-language-server-protocol",
		speakers: [speakersBySlug["tj-devries"]],
		tags: ["DevTools", "Language Server Protocol"],
		title: "Zero to Squiggle with the Language Server Protocol",
		type: "full",
	},
};
