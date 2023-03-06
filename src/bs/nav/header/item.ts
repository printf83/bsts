import { IElem, isAttr } from "../../../core/base/tag.js";
import { mergeClass } from "../../../core/fn/mergeClass.js";
import { IAttrTagLi, li } from "../../../ht/li.js";

export interface IAttrBSNavItem extends IAttrTagLi {
	role?: "presentation";
	dropdown?: boolean;
}

const convert = (attr: IAttrBSNavItem): IAttrTagLi => {
	attr.class = mergeClass(attr.class, [
		"nav-item",
		attr.dropdown ? "dropdown" : "",
	]);

	delete attr.dropdown;

	return attr;
};

export class item extends li {
	constructor(); //#1
	constructor(attr: IAttrBSNavItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSNavItem>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({}), arg[0]);
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(arg[0]), arg[1]);
		}
	}
}
