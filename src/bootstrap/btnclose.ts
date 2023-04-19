import { bsConsNoElemArg } from "../core/bootstrap.js";
import { mergeClass } from "../core/mergeClass.js";
import { button, ITagButton } from "../html/button.js";

export interface IBsBtnclose extends ITagButton {
	white?: boolean;
}

const convert = (attr: IBsBtnclose) => {
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
	constructor(); //#1
	constructor(attr: IBsBtnclose); //#2
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}
