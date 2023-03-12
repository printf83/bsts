import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";

export interface IAttrTagOl extends IAttr {
	unstyle?: boolean;
	inline?: boolean;
	reversed?: boolean;
	startValue?: number;
}

const convert = (attr: IAttrTagOl) => {
	attr.class = mergeClass(attr.class, [attr.unstyle ? "list-unstyle" : "", attr.inline ? "list-inline" : ""]);

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
