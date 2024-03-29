import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";
import { bsConstructor } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { div } from "../html/div.js";

/**
 * Extends the div element to create a Bootstrap grid layout.
 * Includes default values for the display and gap CSS properties.
 * The convert() method merges passed attributes with the defaults.
 */
export class grid extends div {
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
				display: "grid",
				gap: 3,
			},
			attr
		);
		return super.convert(attr);
	}
}
