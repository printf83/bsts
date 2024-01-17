import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";
import { bsConstructor } from "../core/bootstrap.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { div } from "../html/div.js";

/**
 * Form floating component that wraps an input and label to allow the label to
 * "float" above the input when focused or filled. Adds the .form-floating class.
 * Extends the div component.
 */
export class formfloating extends div {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor("elem", arg));
	}

	convert(attr: attr) {
		attr.class = mergeClass(attr.class, "form-floating");

		return super.convert(attr);
	}
}
