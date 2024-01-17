import { tagConstructor, tag } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

/**
 * dd HTML element constructor
 * Extends the tag class to generate dd elements
 * @param attr - Attributes for the dd element
 * @param elem - Child element(s) for the dd element
 */
export class dd extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("dd", tagConstructor("elem", arg));
	}
}
