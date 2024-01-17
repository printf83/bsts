import { bsConstructor } from "../core/bootstrap.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { div } from "../html/div.js";

/**
 * col extends the div element to represent a column layout element.
 * It has a constructor that accepts attributes and child elements like other elements.
 * The convert method merges in a col property to flag it as a column element
 * before passing the attributes to the super call.
 */
export class col extends div {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor("elem", arg));
	}

	convert(attr: attr) {
		attr = mergeObject(
			{
				col: true,
			},
			attr
		);
		return super.convert(attr);
	}
}
