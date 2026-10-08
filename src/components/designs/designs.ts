import type { AstroComponentFactory } from "astro/runtime/server/index.js";

import type { DesignMeta } from "./types";

const components = import.meta.glob<{ default: AstroComponentFactory }>(
	"./d*/Design.astro",
	{ eager: true },
);

const metaModules: Partial<Record<string, { meta: DesignMeta }>> =
	import.meta.glob<{
		meta: DesignMeta;
	}>("./d*/meta.ts", {
		eager: true,
	});

function idFromPath(path: string) {
	return Number(/\/d(\d+)\//.exec(path)?.[1]);
}

export const designs = Object.entries(components)
	.map(([path, module]) => ({
		Design: module.default,
		id: idFromPath(path),
		meta: metaModules[path.replace("Design.astro", "meta.ts")]?.meta,
	}))
	.sort((a, b) => a.id - b.id);
