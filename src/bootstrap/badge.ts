import { bsConstructor } from "../core/bootstrap.js";
import { tagConstructorArgs } from "../core/tag.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { span } from "../html/span.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

/**
 * badge extends the span component to represent a badge.
 * It applies the "badge" class to the element.
 */
export class badge extends span {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: tagConstructorArgs<attr>) {
		super(bsConstructor("elem", arg));
	}

	convert(attr: attr) {
		attr.class = mergeClass(attr.class, "badge");

		return super.convert(attr);
	}
}
