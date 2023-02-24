import { mergeClass } from "../../core/fn/mergeClass.js";
import { hr, IAttrTagHr } from "../../ht/hr.js";

const convert = (attr: IAttrTagHr): IAttrTagHr => {
	attr.class = mergeClass(attr.class, "dropdown-divider");
	return attr;
};

export class divider extends hr {
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
