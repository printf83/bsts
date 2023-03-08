import { IAttr, IElem, isAttr, tag } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { mergeObject } from "../../core/fn/mergeObject.js";

export interface IAttrBSNavbarBrand extends IAttr {
	href?: string;
}

const convert = (attr: IAttr): IAttr => {
	attr.class = mergeClass(attr.class, ["navbar-brand"]);
	return attr;
};

export class brand extends tag {
	constructor(); //#1
	constructor(attr: IAttrBSNavbarBrand); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavbarBrand, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super("span", convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSNavbarBrand>(arg[0])) {
				//#2
				super(arg[0].href ? "a" : "span", convert(arg[0]));
			} else {
				//#3
				super("span", convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			//#4
			super(
				arg[0].href ? "a" : "span",
				convert(mergeObject({ elem: arg[1] }, arg[0]))
			);
		}
	}
}
