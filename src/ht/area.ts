import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagArea extends IAttr {
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

export class area extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagArea);
	constructor(attr: IAttrTagArea, elem: IElem);
	constructor(...arg: any[]) {
		super("area", tagConsArg<IAttrTagArea>("elem", arg));
	}
}
