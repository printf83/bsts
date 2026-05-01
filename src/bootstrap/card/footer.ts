import { attr } from "../../interface/core/attr.js";
import { tagConstructorArgs } from "../../core/tag.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { div } from "../../html/div.js";

export class footer extends div {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: tagConstructorArgs<attr>) {
		super(bsConstructor("elem", arg));
	}

	convert(attr: attr) {
		attr.class = mergeClass(attr.class, "card-footer");

		return super.convert(attr);
	}
}
