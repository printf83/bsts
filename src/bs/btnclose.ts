import { conNoElem } from "../core/base/bootstrap.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { button, IAttrTagButton } from "../ht/button.js";

export interface IAttrBSBtnclose extends IAttrTagButton {
	label?: string;
	white?: boolean;
}

const convert = (attr: IAttrBSBtnclose): IAttrBSBtnclose => {
	//default value
	attr.label = attr.label || "Close";
	attr.type = attr.type || "button";

	//add btn-close class
	//white
	attr = mergeObject(
		{
			class: ["btn-close", attr.white ? "btn-close-white" : ""],
			aria: { label: attr.label },
		},
		attr
	);

	delete attr.label;
	delete attr.white;

	return attr;
};

export class btnclose extends button {
	constructor(); //#1
	constructor(attr: IAttrBSBtnclose); //#2
	constructor(...arg: any[]) {
		super(conNoElem(convert, arg));
	}
}
