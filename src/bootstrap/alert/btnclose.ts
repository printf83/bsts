import { bsConsNoElemArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { btnclose as TBtnclose, IBsBtnclose } from "../btnclose.js";

export interface IBsAlertBtnclose extends IBsBtnclose {
	dismiss?: "alert";
}

const convert = (attr: IBsAlertBtnclose) => {
	attr.dismiss ??= "alert";

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
	constructor(attr: IBsAlertBtnclose); //#2
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}
