import { tagConstructor, tag } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

/**
 * Defines a bdi HTML element, which allows you to set the directionality of text inside the element independent of the surrounding text.
 * Extends the base tag class.
 */
export class bdi extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("bdi", tagConstructor("elem", arg));
	}
}
