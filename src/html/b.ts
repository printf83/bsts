import { tagConstructor, tag, ConstructorArgs } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

/**
 * Defines the b class which extends the tag class.
 * This represents the <b> HTML tag.
 */
export class b extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: ConstructorArgs<elem>) {
		super("b", tagConstructor("elem", arg));
	}
}
