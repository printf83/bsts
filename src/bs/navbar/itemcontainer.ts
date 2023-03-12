import { IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { IAttrTagUl, ul } from "../../ht/ul.js";

export interface IAttrBSNavbarItemcontainer extends IAttrTagUl {
	scroll?: boolean;
	scrollHeight?: string;
}

const convert = (attr: IAttrBSNavbarItemcontainer) => {
	attr = mergeObject(
		{
			class: ["navbar-nav", attr.scroll ? "navbar-nav-scroll" : ""],
			style: { "--bs-scroll-height": attr.scrollHeight },
		},
		attr
	);

	return attr;
};

export class itemcontainer extends ul {
	constructor(); //#1
	constructor(attr: IAttrBSNavbarItemcontainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavbarItemcontainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSNavbarItemcontainer>("elem", convert, arg));
	}
}
