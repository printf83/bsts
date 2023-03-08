import { IAttr, isAttr, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { li } from "./li.js";

export type IElemTagUl = li | li[];

export interface IAttrTagUl extends IAttr {
	unstyle?: boolean;
	inline?: boolean;
	elem?: IElemTagUl;
}

const convert = (attr: IAttrTagUl): IAttr => {
	attr.class = mergeClass(attr.class, [
		attr.unstyle ? "list-unstyle" : "",
		attr.inline ? "list-inline" : "",
	]);
	delete attr.unstyle;
	delete attr.inline;

	return attr;
};

export class ul extends tag {
	constructor();
	constructor(elem: IElemTagUl);
	constructor(attr: IAttrTagUl);
	constructor(attr: IAttrTagUl, elem: IElemTagUl);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("ul", convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrTagUl>(arg[0])) {
				super("ul", convert(arg[0]));
			} else {
				super("ul", convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			super("ul", mergeObject({ elem: arg[1] }, arg[0]));
		}
	}
}
