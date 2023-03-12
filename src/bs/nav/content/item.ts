import { IAttr, IElem } from "../../../core/base/tag.js";
import { bsConstArg } from "../../../core/base/bootstrap.js";
import { mergeClass } from "../../../core/fn/mergeClass.js";
import { div } from "../../../ht/div.js";

export interface IAttrBSNavContentItem extends IAttr {
	active?: boolean;
	role?: "tabpanel";
	labelledby?: string;
	tabindex?: string;
	animation?: boolean;
}

const convert = (attr: IAttrBSNavContentItem): IAttr => {
	attr.role = attr.role || "tabpanel";
	attr.tabindex = attr.tabindex || "0";
	attr.animation = attr.animation || true;

	attr.class = mergeClass(attr.class, [
		"tab-pane",
		attr.active ? "active" : "",
		attr.active ? "show" : "",
		attr.animation ? "fade" : "",
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
