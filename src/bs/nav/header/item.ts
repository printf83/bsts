import { IElem } from "../../../core/base/tag.js";
import { conProp } from "../../../core/fn/arg.js";
import { mergeClass } from "../../../core/fn/mergeClass.js";
import { IAttrTagLi, li } from "../../../ht/li.js";

export interface IAttrBSNavItem extends IAttrTagLi {
	role?: "presentation";
	dropdown?: boolean;
}

const convert = (attr: IAttrBSNavItem): IAttrTagLi => {
	attr.class = mergeClass(attr.class, ["nav-item", attr.dropdown ? "dropdown" : ""]);

	delete attr.dropdown;

	return attr;
};

export class item extends li {
	constructor(); //#1
	constructor(attr: IAttrBSNavItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conProp<IAttrBSNavItem>("elem", convert, arg));
	}
}
