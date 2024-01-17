import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";
import { bsConstructor } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { div } from "../html/div.js";

/**
 * The container class extends div and represents a container element.
 * It has a constructor that accepts attr, elem, or both to create the element.
 * The convert method merges passed in attributes with a container property set to true.
 */
export class container extends div {
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
				container: true,
			},
			attr
		);
		return super.convert(attr);
	}
}
