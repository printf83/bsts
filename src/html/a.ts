import { bootstrapType } from "../core/base/bootstrap.js";
import { IAttr, IElem, tag, tagConsArg } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";

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
	color?: bootstrapType.linkColor[number];
	stretched?: true;
}

const convert = (attr: IAttrTagA) => {
	attr.class = mergeClass(attr.class, [
		attr.color ? `link-${attr.color}` : undefined,
		attr.stretched ? "stretched-link" : undefined,
	]);

	delete attr.color;
	delete attr.stretched;

	return attr;
};

export class a extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagA);
	constructor(attr: IAttrTagA, elem: IElem);
	constructor(...arg: any[]) {
		super("a", convert(tagConsArg<IAttrTagA>("elem", arg)));
	}
}
