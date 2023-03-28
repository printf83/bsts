import { tagConsArg, IAttr, IElem, tag, isAttr } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { li } from "./li.js";

export interface IAttrTagOl extends IAttr {
	unstyle?: boolean;
	inline?: boolean;
	reversed?: boolean;
	startValue?: number;

	list?: string | tag | (string | tag)[];
}

const convert = (attr: IAttrTagOl) => {
	attr.class = mergeClass(attr.class, [
		attr.unstyle ? "list-unstyle" : undefined,
		attr.inline ? "list-inline" : undefined,
	]);

	if (attr.list && !attr.elem) {
		if (!Array.isArray(attr.list)) {
			attr.list = [attr.list];
		}

		attr.elem = attr.list.map((i) => {
			return new li(i);
		});
	}

	delete attr.unstyle;
	delete attr.inline;
	delete attr.list;

	return attr;
};

export class ol extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagOl);
	constructor(attr: IAttrTagOl, elem: IElem);
	constructor(...arg: any[]) {
		super("ol", convert(tagConsArg<IAttrTagOl>("elem", arg)));
	}
}
