import { bsConstArg } from "../../../src/core/bootstrap.js";
import { IAttr, IElem } from "../../../src/core/tag.js";
import { div } from "../../../src/html/div.js";

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
