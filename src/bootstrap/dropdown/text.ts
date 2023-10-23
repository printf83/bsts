import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { span } from "../../html/span.js";
import { mergeClass } from "../../core/util/mergeClass.js";

const convert = (attr: attr) => {
	attr.class = mergeClass(attr.class, "dropdown-item-text");

	return attr;
};

export class text extends span {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor("elem", arg)));
	}

	convert(attr: attr) {
		return super.convert(attr);
	}
}
