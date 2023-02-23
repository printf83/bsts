import { mergeClass } from "../../core/fn/mergeClass.js";
import { hr, IAttrTagHr } from "../../ht/hr.js";
import { IAttrTagLi, li } from "../../ht/li.js";

const convert = (attr: IAttrTagHr): IAttrTagLi => {
	attr.class = mergeClass(attr.class, "dropdown-divider");

	//return as li attr
	return {
		elem: new hr(attr),
	};
};

export class divider extends li {
	constructor(); //#1
	constructor(attr: IAttrTagHr); //#2
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			super(convert(arg[0]));
		}
	}
}
