import { tagConstructor, tag } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

/**
 * caption HTML element constructor
 * Extends the tag class to generate caption elements
 * @param attr Optional attributes
 * @param elem Optional child elements
 */
export class caption extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("caption", tagConstructor("elem", arg));
	}
}
