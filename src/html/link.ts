import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

export interface ITagLink extends IAttr {
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
	constructor(attr: ITagLink);
	constructor(...arg: any[]) {
		super("link", tagConsNoElemArg<ITagLink>(arg));
	}
}

export const Link = (Attr?: ITagLink) => genTagClass<link, ITagLink>(link, Attr);
