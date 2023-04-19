import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagArea extends IAttr {
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
	constructor(attr: ITagArea);
	constructor(attr: ITagArea, elem: IElem);
	constructor(...arg: any[]) {
		super("area", tagConsArg<ITagArea>("elem", arg));
	}
}

export const Area = (AttrOrElem?: ITagArea | IElem, Elem?: IElem) =>
	genTagClass<area, ITagArea>(area, AttrOrElem, Elem);
