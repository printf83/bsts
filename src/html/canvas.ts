import { tagConstructor, tag } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

/**
 * Canvas element constructor.
 * Extends the tag class.
 * Can be constructed with various combinations of attributes and child elements.
 */
export class canvas extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("canvas", tagConstructor("elem", arg));
	}
}
