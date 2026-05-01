import { tagConstructorNoElement, tag, tagConstructorArgsNoElement } from "../core/tag.js";
import { attr } from "../interface/core/attr.js";

/**
 * Exports a br class that extends the tag class.
 * This allows creating br HTML elements.
 */
export class br extends tag {
	constructor();
	constructor(attr: attr);
	constructor(...arg: tagConstructorArgsNoElement<attr>) {
		super("br", tagConstructorNoElement(arg));
	}
}
