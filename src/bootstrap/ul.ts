import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { mergeClass } from "../core/util/mergeClass.js";
import { ul as Ul } from "../interface/bootstrap/ul.js";

/**
 * ul component class which extends the tag class.
 * Allows creating a ul element with various constructors supporting elements and attributes.
 * Handles merging in the unstyled and inline class names based on attributes.
 * Converts attributes to bootstrap ul styles.
 */
export class ul extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Ul);
	constructor(attr: Ul, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("ul", tagConstructor<Ul>("elem", arg));
	}

	convert(attr: Ul) {
		attr.class = mergeClass(attr.class, [
			attr.unstyle ? "list-unstyled" : undefined,
			attr.inline ? "list-inline" : undefined,
		]);

		delete attr.unstyle;
		delete attr.inline;

		return super.convert(attr);
	}
}
