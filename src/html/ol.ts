import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";

export interface IAttrTagOl extends IAttr {
	unstyle?: boolean;
	inline?: boolean;
	reversed?: boolean;
	startValue?: number;
}

const convert = (attr: IAttrTagOl) => {
	attr.class = mergeClass(attr.class, [
		attr.unstyle ? "list-unstyle" : undefined,
		attr.inline ? "list-inline" : undefined,
	]);

	delete attr.unstyle;
	delete attr.inline;

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
