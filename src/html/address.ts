import { tagConstructor, tag } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

/**
 * The address class extends the tag class to represent an HTML <address> element.
 * It can be used to define contact information for the nearest article or body element ancestor.
 */
export class address extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("address", tagConstructor("elem", arg));
	}
}
