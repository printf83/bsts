import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { li } from "./li.js";

export interface IAttrTagUl extends IAttr {
	unstyle?: boolean;
	inline?: boolean;
	list?: string | tag | (string | tag)[];
}

const convert = (attr: IAttrTagUl) => {
	attr.class = mergeClass(attr.class, [
		attr.unstyle ? "list-unstyled" : undefined,
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

export class ul extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagUl);
	constructor(attr: IAttrTagUl, elem: IElem);
	constructor(...arg: any[]) {
		super("ul", convert(tagConsArg<IAttrTagUl>("elem", arg)));
	}
}
