import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

export interface Link extends IAttr {
	crossorigin?: "anonymous" | "use-credentials";
	href?: string;
	hreflang?: string;
	media?: string;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "unsafe-url";
	rel?:
		| "alternate"
		| "author"
		| "dns-prefetch"
		| "help"
		| "icon"
		| "license"
		| "next"
		| "pingback"
		| "preconnect"
		| "prefetch"
		| "preload"
		| "prerender"
		| "prev"
		| "search"
		| "stylesheet";

	sizes?: string;
	type?: string;
}

export class link extends tag {
	constructor();
	constructor(attr: Link);
	constructor(...arg: any[]) {
		super("link", tagConsNoElemArg<Link>(arg));
	}
}

export const Link = (Attr?: Link) => genTagClass<link, Link>(link, Attr);
