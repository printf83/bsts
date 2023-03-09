import { IAttr, IElem, isAttr, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";

export interface IAttrTagOl extends IAttr {
	unstyle?: boolean;
	inline?: boolean;
	reversed?: boolean;
	startValue?: number;
}

const convert = (attr: IAttrTagOl): IAttr => {
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
		if (arg.length === 0) {
			super("ol", convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrTagOl>(arg[0])) {
				super("ol", convert(arg[0]));
			} else {
				super("ol", convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			super("ol", mergeObject({ elem: arg[1] }, arg[0]));
		}
	}
}
