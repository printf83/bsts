import { tagConstructorNoElement, tag, tagConstructorArgsNoElement } from "../core/tag.js";
import { base as Base } from "../interface/html/base.js";

/**
 * Exports a Base class that extends the Tag class.
 * This implements the base HTML element.
 */
export class base extends tag {
	constructor();
	constructor(attr: Base);
	constructor(...arg: tagConstructorArgsNoElement<Base>) {
		super("base", tagConstructorNoElement<Base>(arg));
	}
}
