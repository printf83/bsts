import { IAttr, IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { div } from "../../../html/div.js";

export interface IAttrBSNavContentItem extends IAttr {
	active?: boolean;
	role?: "tabpanel";
	labelledby?: string;
	tabindex?: string;
	animation?: boolean;
}

const convert = (attr: IAttrBSNavContentItem) => {
	attr.role = attr.role || "tabpanel";
	attr.tabindex = attr.tabindex || "0";
	attr.animation = attr.animation || true;

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
	constructor(attr: IAttrBSNavContentItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavContentItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSNavContentItem>("elem", convert, arg));
	}
}
