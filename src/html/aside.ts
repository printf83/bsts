import { tagConstructor, tag } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

/**
 * aside HTML element class constructor
 *
 * @param elem - Child element(s) to append inside the aside element. Can be a single elem instance or an array of elems.
 * @param attr - Attributes to set on the aside element.
 * @param arg - Rest parameter that accepts elem and/or attr in any order.
 */
export class aside extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("aside", tagConstructor("elem", arg));
	}
}
