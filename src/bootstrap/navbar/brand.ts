import { bsConstArg, bsConstArgTag } from "../../core/bootstrap.js";
import { IAttr, IElem, tag } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";

export interface IBsNavbarBrand extends IAttr {
	href?: string;
}

const convert = (attr: IBsNavbarBrand) => {
	attr.class = mergeClass(attr.class, ["navbar-brand"]);
	return attr;
};

export class brand extends tag {
	constructor(); //#1
	constructor(attr: IBsNavbarBrand); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsNavbarBrand, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(
			bsConstArgTag<IBsNavbarBrand>("elem", "span", "a", (i) => (i.href ? true : false), arg),
			convert(bsConstArg<IBsNavbarBrand>("elem", arg))
		);
	}
}
