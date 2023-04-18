import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { div } from "../../html/div.js";

export interface IAttrBSTableResponsive extends IAttr {
	responsive?: bootstrapType.viewport;
}

const convert = (attr: IAttrBSTableResponsive) => {
	attr.class = mergeClass(attr.class, [attr.responsive ? `table-responsive-${attr.responsive}` : "table-responsive"]);

	delete attr.responsive;

	return attr;
};

export class responsive extends div {
	constructor(); //#1
	constructor(attr: IAttrBSTableResponsive); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSTableResponsive, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSTableResponsive>("elem", convert, arg));
	}
}
