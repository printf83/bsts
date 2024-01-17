import { tagConstructor, tag } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

/**
 * Defines a body HTML element class that extends the tag class.
 * Allows creating body elements with various attributes and child elements.
 */
export class body extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("body", tagConstructor("elem", arg));
	}
}
