import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";
import { bsConstructor } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { div } from "../html/div.js";

/**
 * Row class that extends div.
 * Represents a Bootstrap row element.
 * Constructor accepts attributes and child elements.
 * Has convert() method to merge in row attribute.
 */
export class row extends div {
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
				row: true,
			},
			attr
		);
		return super.convert(attr);
	}
}
