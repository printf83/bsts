import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { IAttrTagUl, ul } from "../../html/ul.js";
import { nav } from "../../html/nav.js";

export interface IAttrBSPaginationContainer extends IAttrTagUl {
	weight?: "sm" | "lg";
}

const convert = (attr: IAttrBSPaginationContainer) => {
	//nav only prop is label
	let navAttr: IAttr = {
		label: attr.label,
	};

	//remove label for ul
	delete attr.label;

	//convert attr for ul
	attr.class = mergeClass(attr.class, ["pagination", attr.weight ? `pagination-${attr.weight}` : undefined]);

	delete attr.weight;

	//add ul to nav
	navAttr.elem = new ul(attr);

	return navAttr;
};

export class container extends nav {
	constructor(); //#1
	constructor(attr: IAttrBSPaginationContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSPaginationContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSPaginationContainer>("elem", convert, arg));
	}
}
