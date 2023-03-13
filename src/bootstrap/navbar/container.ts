import { bootstrapType } from "../../core/base/bootstrap.js";
import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { div } from "../../html/div.js";
import { nav } from "../../html/nav.js";

export interface IAttrBSNavbarContainer extends IAttr {
	expand?: bootstrapType.viewport[number];
	placement?: "fixed-top" | "fixed-bottom" | "sticky-top" | "sticky-bottom";
}

const convert = (attr: IAttrBSNavbarContainer) => {
	attr.container = attr.container || "fluid";

	attr.class = mergeClass(attr.class, [
		"navbar",
		attr.placement ? attr.placement : undefined,
		attr.expand ? `navbar-expand-${attr.expand}` : undefined,
	]);

	attr.elem = new div({
		container: attr.container,
		justifyContent: attr.justifyContent,
		elem: attr.elem ? attr.elem : undefined,
	});

	delete attr.placement;
	delete attr.expand;

	//move this setting into attr.elem
	delete attr.justifyContent;
	delete attr.container;

	return attr;
};

export class container extends nav {
	constructor(); //#1
	constructor(attr: IAttrBSNavbarContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavbarContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSNavbarContainer>("elem", convert, arg));
	}
}
