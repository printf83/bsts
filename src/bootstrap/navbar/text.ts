import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { span } from "../../html/span.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "navbar-text");
	return attr;
};

export class text extends span {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg("elem", convert, arg));
	}
}
