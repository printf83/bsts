import { tagConstructor, tag } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";

/**
 * Exported code class that extends the tag class to create a code HTML element.
 * Provides overloaded constructors to initialize the code element with different combinations of attributes and child elements.
 */
export class code extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("code", tagConstructor("elem", arg));
	}
}
