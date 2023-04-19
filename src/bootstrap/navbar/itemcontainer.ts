import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { ITagUl, ul } from "../../html/ul.js";

export interface IBsNavbarItemcontainer extends ITagUl {
	scroll?: boolean;
	scrollHeight?: string;
}

const convert = (attr: IBsNavbarItemcontainer) => {
	attr = mergeObject(
		{
			class: ["navbar-nav", attr.scroll ? "navbar-nav-scroll" : undefined],
			style: { "--bs-scroll-height": attr.scrollHeight },
		},
		attr
	);

	return attr;
};

export class itemcontainer extends ul {
	constructor(); //#1
	constructor(attr: IBsNavbarItemcontainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsNavbarItemcontainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsNavbarItemcontainer>("elem", convert, arg));
	}
}
