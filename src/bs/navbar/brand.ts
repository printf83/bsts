import { conProp, conPropTag } from "../../core/base/bootstrap.js";
import { IAttr, IElem, tag } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";

export interface IAttrBSNavbarBrand extends IAttr {
	href?: string;
}

const convert = (attr: IAttrBSNavbarBrand): IAttr => {
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
			conPropTag<IAttrBSNavbarBrand>("span", "a", (i) => (i.href ? true : false), arg),
			conProp<IAttrBSNavbarBrand>("elem", convert, arg)
		);
	}
}
