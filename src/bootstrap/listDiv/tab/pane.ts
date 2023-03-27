import { IAttr, IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { div } from "../../../html/div.js";

export interface IAttrBSListDivPane extends IAttr {
	animation?: boolean;
	active?: boolean;
	role?: "tabpanel";
}

const convert = (attr: IAttrBSListDivPane) => {
	attr.animation ??= true;
	attr.role ??= "tabpanel";

	attr.class = mergeClass(attr.class, [
		"tab-pane",
		attr.animation ? "fade" : undefined,
		attr.active ? "show" : undefined,
		attr.active ? "active" : undefined,
	]);

	delete attr.animation;
	delete attr.active;

	return attr;
};

export class pane extends div {
	constructor(); //#1
	constructor(attr: IAttrBSListDivPane); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSListDivPane, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSListDivPane>("elem", convert, arg));
	}
}
