import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { UUID } from "../../core/uuid.js";
import { h5 } from "../../html/h5.js";

const convert = (attr: attr) => {
	attr.id ??= UUID();
	attr.class = mergeClass(attr.class, "offcanvas-title");
	return attr;
};

export class title extends h5 {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem);
	constructor(attr: attr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
