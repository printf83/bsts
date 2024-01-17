import { bsConstructorNoElement } from "../core/bootstrap.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { button } from "../html/button.js";
import { btnclose as Btnclose } from "../interface/bootstrap/btnclose.js";

/**
 * btnclose extends the button class to create a close button with default styling and behavior.
 *
 * The constructor calls the super constructor with bsConstructorNoElement to handle arguments.
 *
 * The convert method sets default values for the label and type if not provided. It also handles adding the btn-close and btn-close-white classes based on the white property.
 */
export class btnclose extends button {
	constructor();
	constructor(attr: Btnclose);
	constructor(...arg: any[]) {
		super(bsConstructorNoElement(arg));
	}

	convert(attr: Btnclose) {
		//default value
		attr.label ??= "Close";
		attr.type ??= "button";

		//add btn-close class
		//white
		attr.class = mergeClass(attr.class, ["btn-close", attr.white ? "btn-close-white" : undefined]);

		delete attr.white;
		return super.convert(attr);
	}
}
