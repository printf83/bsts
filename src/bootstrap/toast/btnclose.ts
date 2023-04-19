import { bsConsNoElemArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { btnclose as TBtnclose, IBsBtnclose } from "../btnclose.js";

export interface IBsToastBtnclose extends IBsBtnclose {
	dismiss?: "toast";
}

const convert = (attr: IBsToastBtnclose) => {
	attr.dismiss ??= "toast";

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
	constructor(attr: IBsToastBtnclose); //#2
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}
