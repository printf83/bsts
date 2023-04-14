import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { figure } from "../../html/figure.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "figure");
	return attr;
};

export class container extends figure {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg("elem", convert, arg));
	}
}
