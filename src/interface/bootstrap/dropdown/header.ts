import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h6 } from "../../html/h6.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "dropdown-header");
	return attr;
};

export class header extends h6 {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
