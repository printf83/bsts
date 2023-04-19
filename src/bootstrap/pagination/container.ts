import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { ITagUl, ul } from "../../html/ul.js";
import { nav } from "../../html/nav.js";

export interface IBsPaginationContainer extends ITagUl {
	weight?: "sm" | "lg";
}

const convert = (attr: IBsPaginationContainer) => {
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
	constructor(attr: IBsPaginationContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsPaginationContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsPaginationContainer>("elem", arg)));
	}
}
