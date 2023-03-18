import { bootstrapType } from "../../core/base/bootstrap.js";
import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { nav } from "../../html/nav.js";
import { div } from "../../html/div.js";
import { header } from "../../html/header.js";

export interface IAttrBSNavbarContainer extends IAttr {
	expand?: bootstrapType.viewport[number];
}

const convert = (attr: IAttrBSNavbarContainer) => {
	let mainAttr: IAttr = {
		class: ["navbar", attr.expand ? `navbar-expand-${attr.expand}` : undefined],
	};

	delete attr.expand;

	mainAttr.elem = new div(attr);

	return mainAttr;
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

export class containerHeader extends header {
	constructor(); //#1
	constructor(attr: IAttrBSNavbarContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavbarContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSNavbarContainer>("elem", convert, arg));
	}
}
