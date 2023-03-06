import { mergeObject } from "../core/fn/mergeObject.js";
import { button, IAttrTagButton } from "../ht/button.js";

export interface IAttrBSBtnclose extends IAttrTagButton {
	label?: string;
	elem?: undefined;
}

const convert = (attr: IAttrBSBtnclose): IAttrBSBtnclose => {
	//default value
	attr.label = attr.label || "Close";
	attr.type = attr.type || "button";

	//add btn-close class
	//white
	attr = mergeObject(
		{
			class: ["btn-close"],
			aria: { label: attr.label },
		},
		attr
	);

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
