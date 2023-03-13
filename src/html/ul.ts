import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";

export interface IAttrTagUl extends IAttr {
	unstyle?: boolean;
	inline?: boolean;
}

const convert = (attr: IAttrTagUl) => {
	attr.class = mergeClass(attr.class, [
		attr.unstyle ? "list-unstyle" : undefined,
		attr.inline ? "list-inline" : undefined,
	]);

	delete attr.unstyle;
	delete attr.inline;

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
