import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { div } from "../../html/div.js";

export interface IBsTableResponsive extends IAttr {
	responsive?: bootstrapType.viewport;
}

const convert = (attr: IBsTableResponsive) => {
	attr.class = mergeClass(attr.class, [attr.responsive ? `table-responsive-${attr.responsive}` : "table-responsive"]);

	delete attr.responsive;

	return attr;
};

export class responsive extends div {
	constructor(); //#1
	constructor(attr: IBsTableResponsive); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsTableResponsive, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsTableResponsive>("elem", arg)));
	}
}
