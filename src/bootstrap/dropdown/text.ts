import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { span } from "../../html/span.js";
import { mergeClass } from "../../core/mergeClass.js";

const convert = (attr: attr) => {
	attr.class = mergeClass(attr.class, "dropdown-item-text");

	return attr;
};

export class text extends span {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem);
	constructor(attr: attr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
