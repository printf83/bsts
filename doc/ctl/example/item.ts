import { bsConstArg } from "@printf83/bsts/lib/core/bootstrap";
import { IAttr, IElem } from "@printf83/bsts/lib/core/tag";
import { div } from "@printf83/bsts/lib/html/div";

const convert = (attr: IAttr) => {
	attr.marginBottom ??= 3;
	return attr;
};

export class item extends div {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg("elem", convert, arg));
	}
}
