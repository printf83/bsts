import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h } from "../../html/h.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "dropdown-header");
	return attr;
};

export class header extends h {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(6, convert(bsConstArg("elem", arg)));
	}
}
