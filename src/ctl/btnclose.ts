import { mergeObject } from "../core/fn/mergeObject.js";
import { button, IAttrTagButton } from "../tag/button.js";

export interface IAttrBSBtnclose extends IAttrTagButton {
	white?: true;
	label?: string;

	elem?: undefined;
}

const convert = (attr: IAttrBSBtnclose): IAttrBSBtnclose => {
	//label
	if (!attr.label) {
		attr.label = "Close";
	}

	//add btn-close class
	//white
	attr = mergeObject(
		{
			class: ["btn-close", attr.white ? "btn-close-white" : ""],
			aria: { label: attr.label },
		},
		attr
	);

	delete attr.white;
	delete attr.label;

	return attr;
};

export class btnclose extends button {
	constructor(); //#1
	constructor(attr: IAttrBSBtnclose); //#2
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			super(convert(arg[0] as IAttrBSBtnclose));
		}
	}
}
