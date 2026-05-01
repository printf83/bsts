import { attr } from "../../interface/core/attr.js";
import { tagConstructorArgs } from "../../core/tag.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { span } from "../../html/span.js";
import { mergeClass } from "../../core/util/mergeClass.js";

export class text extends span {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: tagConstructorArgs<attr>) {
		super(bsConstructor("elem", arg));
	}

	convert(attr: attr) {
		attr.class = mergeClass(attr.class, "dropdown-item-text");

		return super.convert(attr);
	}
}
