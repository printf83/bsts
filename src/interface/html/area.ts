import { IAttr } from "../../core/tag.js";

export interface Area extends IAttr {
	alt?: string;
	coords?: string;
	download?: string;
	href?: string;
	hreflang?: string;
	media?: string;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	rel?:
		| "alternate"
		| "author"
		| "bookmark"
		| "help"
		| "license"
		| "next"
		| "nofollow"
		| "noreferrer"
		| "prefetch"
		| "prev"
		| "search"
		| "tag";
	shape?: "default" | "rect" | "circle" | "poly";
	target?: string;
	type?: string;
}
