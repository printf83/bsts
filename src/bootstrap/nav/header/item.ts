import { IElem } from "../../../core/base/tag.js";
import { bsConstArg } from "../../../core/base/bootstrap.js";
import { mergeClass } from "../../../core/fn/mergeClass.js";
import { IAttrTagLi, li } from "../../../html/li.js";

export interface IAttrBSNavItem extends IAttrTagLi {
	role?: "presentation";
	dropdown?: boolean;
}

const convert = (attr: IAttrBSNavItem) => {
	attr.class = mergeClass(attr.class, ["nav-item", attr.dropdown ? "dropdown" : undefined]);

	delete attr.dropdown;

	return attr;
};

export class item extends li {
	constructor(); //#1
	constructor(attr: IAttrBSNavItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSNavItem>("elem", convert, arg));
	}
}
