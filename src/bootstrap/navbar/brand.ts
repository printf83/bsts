import { bsConstArg, bsConstArgTag } from "../../core/bootstrap.js";
import { IAttr, IElem, tag } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";

export interface IAttrBSNavbarBrand extends IAttr {
	href?: string;
}

const convert = (attr: IAttrBSNavbarBrand) => {
	attr.class = mergeClass(attr.class, ["navbar-brand"]);
	return attr;
};

export class brand extends tag {
	constructor(); //#1
	constructor(attr: IAttrBSNavbarBrand); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavbarBrand, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(
			bsConstArgTag<IAttrBSNavbarBrand>("span", "a", (i) => (i.href ? true : false), arg),
			bsConstArg<IAttrBSNavbarBrand>("elem", convert, arg)
		);
	}
}
