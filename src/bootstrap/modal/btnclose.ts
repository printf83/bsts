import { bsConsNoElemArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { btnclose as TBtnclose, IAttrBSBtnclose } from "../btnclose.js";

export interface IAttrBSModalBtnclose extends IAttrBSBtnclose {
	dismiss?: "modal";
}

const convert = (attr: IAttrBSModalBtnclose) => {
	attr.dismiss = attr.dismiss || "modal";

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
	constructor(attr: IAttrBSModalBtnclose); //#2
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}
