import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { small } from "../../html/small.js";

const convert = (attr: IAttr) => {
	if (!attr.elem) {
		//TODO: create timer and show
	}

	return attr;
};

export class time extends small {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg("elem", convert, arg));
	}
}
