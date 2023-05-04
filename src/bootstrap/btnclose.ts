import { bsConsNoElemArg } from "../core/bootstrap.js";
import { mergeClass } from "../core/mergeClass.js";
import { genTagClass } from "../core/tag.js";
import { button, Button } from "../html/button.js";

export interface Btnclose extends Button {
	white?: boolean;
}

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
		super(bsConsNoElemArg(convert, arg));
	}
}

export const Btnclose = (Attr?: Btnclose) => genTagClass<btnclose, Btnclose>(btnclose, Attr);
