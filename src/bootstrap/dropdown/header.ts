import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h6 } from "../../html/h6.js";

const convert = (attr: attr) => {
	attr.class = mergeClass(attr.class, "dropdown-header");
	return attr;
};

export class header extends h6 {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem);
	constructor(attr: attr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
