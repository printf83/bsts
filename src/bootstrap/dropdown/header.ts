import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { h6 } from "../../html/h6.js";

const convert = (attr: attr) => {
	attr.class = mergeClass(attr.class, "dropdown-header");
	return attr;
};

export class header extends h6 {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
