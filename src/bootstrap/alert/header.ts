import { tagConstructor } from "../../core/tag.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { h4 } from "../../html/h4.js";
import { elem } from "../../interface/core/elem.js";
import { attr } from "../../interface/core/attr.js";

export class header extends h4 {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(tagConstructor("elem", arg));
	}

	convert(attr: attr) {
		attr.class = mergeClass(attr.class, "alert-heading");

		return super.convert(attr);
	}
}
