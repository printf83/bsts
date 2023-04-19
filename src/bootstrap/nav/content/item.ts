import { IAttr, IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { div } from "../../../html/div.js";

export interface IBsNavContentItem extends IAttr {
	active?: boolean;
	role?: "tabpanel";
	labelledby?: string;
	tabindex?: string | number;
	animation?: boolean;
}

const convert = (attr: IBsNavContentItem) => {
	attr.role ??= "tabpanel";
	attr.tabindex ??= "0";
	attr.animation ??= true;

	attr.class = mergeClass(attr.class, [
		"tab-pane",
		attr.active ? "active" : undefined,
		attr.active ? "show" : undefined,
		attr.animation ? "fade" : undefined,
	]);

	delete attr.active;

	return attr;
};

export class item extends div {
	constructor(); //#1
	constructor(attr: IBsNavContentItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsNavContentItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsNavContentItem>("elem", arg)));
	}
}
