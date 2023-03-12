import { IAttr, IElem, tag, tagConsArg } from "../core/base/tag.js";

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
	constructor(attr: IAttrTagA);
	constructor(attr: IAttrTagA, elem: IElem);
	constructor(...arg: any[]) {
		super("a", tagConsArg<IAttrTagA>("elem", arg));
	}
}
