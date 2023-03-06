import { btnclose as TBtnclose, IAttrBSBtnclose } from "../btnclose.js";

const convert = (attr: IAttrBSBtnclose): IAttrBSBtnclose => {
	attr.dismiss = "modal";
	return attr;
};

export class btnclose extends TBtnclose {
	constructor(); //#1
	constructor(attr: IAttrBSBtnclose); //#2
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			super(convert(arg[0]));
		}
	}
}
