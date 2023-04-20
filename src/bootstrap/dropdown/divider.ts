import { IAttr, genTagClass } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
import { hr } from "../../html/hr.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "dropdown-divider");
	return attr;
};

export class divider extends hr {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			super(convert(arg[0]));
		}
	}
}

export const Divider = (Attr?: IAttr) => genTagClass<divider, IAttr>(divider, Attr);
