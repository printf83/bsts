import { consProp, IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagLink extends IAttr {
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

	elem?: undefined;
}

export class link extends tag {
	constructor();
	constructor(href: string);
	constructor(attr: IAttrTagLink);
	constructor(...arg: any[]) {
		super("link", consProp<IAttrTagLink>("href", arg));
	}
}
