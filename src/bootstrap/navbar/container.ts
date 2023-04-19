import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { nav } from "../../html/nav.js";
import { header } from "../../html/header.js";
import { mergeClass } from "../../core/mergeClass.js";

export interface IBsNavbarContainer extends IAttr {
	expand?: bootstrapType.viewport;
}

const convert = (attr: IBsNavbarContainer) => {
	attr.class = mergeClass(attr.class, ["navbar", attr.expand ? `navbar-expand-${attr.expand}` : undefined]);
	delete attr.expand;
	return attr;
};

export class container extends nav {
	constructor(); //#1
	constructor(attr: IBsNavbarContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsNavbarContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsNavbarContainer>("elem", convert, arg));
	}
}

export class containerHeader extends header {
	constructor(); //#1
	constructor(attr: IBsNavbarContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsNavbarContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsNavbarContainer>("elem", convert, arg));
	}
}
