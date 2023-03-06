import { mergeObject } from "../../core/fn/mergeObject.js";
import { btnclose as TBtnclose, IAttrBSBtnclose } from "../btnclose.js";

export interface IAttrBSAlertBtnclose extends IAttrBSBtnclose {
	dismiss?: "alert";
}

const convert = (attr: IAttrBSAlertBtnclose): IAttrBSBtnclose => {
	attr.dismiss = attr.dismiss || "alert";

	attr = mergeObject(
		{
			data: { "bs-dismiss": attr.dismiss },
		},
		attr
	);

	delete attr.dismiss;

	return attr;
};

export class btnclose extends TBtnclose {
	constructor(); //#1
	constructor(attr: IAttrBSAlertBtnclose); //#2
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			super(convert(arg[0]));
		}
	}
}
