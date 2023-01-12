import { IAttr, IElem, tag } from "../core/attach/_index.js";

export interface IAttrTagA extends IAttr {
	download?: string;
	href?: string;
	hreflang?: string;
	media?: string;
	ping?: string;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	rel?:
		| "alternate"
		| "author"
		| "bookmark"
		| "external"
		| "help"
		| "license"
		| "next"
		| "nofollow"
		| "noreferrer"
		| "noopener"
		| "prev"
		| "search"
		| "tag";
	target?: "_blank" | "_parent" | "_self" | "_top";
	type?: string;
}

export class a extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagA, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("a");
		} else if (arg.length === 1) {
			super("a", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("a", arg[0], arg[1]);
		}
	}
}
