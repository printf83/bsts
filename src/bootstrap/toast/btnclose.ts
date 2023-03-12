import { bsConsNoElemArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { btnclose as TBtnclose, IAttrBSBtnclose } from "../btnclose.js";

export interface IAttrBSToastBtnclose extends IAttrBSBtnclose {
	dismiss?: "toast";
}

const convert = (attr: IAttrBSToastBtnclose) => {
	attr.dismiss = attr.dismiss || "toast";

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
	constructor(attr: IAttrBSToastBtnclose); //#2
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}
