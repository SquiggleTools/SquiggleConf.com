import bluesky from "../assets/logos/bluesky.svg";
import discord from "../assets/logos/discord.svg";
import github from "../assets/logos/github.svg";
import linkedin from "../assets/logos/linkedin.svg";
import mastodon from "../assets/logos/mastodon.svg";
import x from "../assets/logos/x.svg";
import youtube from "../assets/logos/youtube.svg";
import { links } from "./links.js";

export const socials = [
	{
		alt: "Bluesky",
		href: "https://bsky.app/profile/squiggleconf.com",
		src: bluesky,
	},
	{
		alt: "LinkedIn",
		href: "https://www.linkedin.com/company/squiggleconf",
		src: linkedin,
	},
	{
		alt: "Mastodon",
		href: "https://fosstodon.org/@SquiggleConf",
		src: mastodon,
	},
	{
		alt: "X",
		href: "https://x.com/SquiggleConf",
		src: x,
	},
	{
		alt: "YouTube",
		href: "https://www.youtube.com/@SquiggleConf",
		src: youtube,
	},
	{
		alt: "GitHub",
		href: "https://www.github.com/SquiggleTools/SquiggleConf2025",
		src: github,
	},
	{
		alt: "Discord",
		href: links.discord,
		src: discord,
	},
].sort((a, b) => a.alt.localeCompare(b.alt));
