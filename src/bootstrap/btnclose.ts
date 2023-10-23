import { bsConstructorNoElement } from "../core/bootstrap.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { button } from "../html/button.js";
import { btnclose as Btnclose } from "../interface/bootstrap/btnclose.js";

const convert = (attr: Btnclose) => {
	//default value
	attr.label ??= "Close";
	attr.type ??= "button";

	//add btn-close class
	//white
	attr.class = mergeClass(attr.class, ["btn-close", attr.white ? "btn-close-white" : undefined]);

	delete attr.white;

	return attr;
};

export class btnclose extends button {
	constructor();
	constructor(attr: Btnclose);
	constructor(...arg: any[]) {
		super(bsConstructorNoElement(convert, arg));
	}
}
