import { bsConsNoElemArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { btnclose as TBtnclose, IBsBtnclose } from "../btnclose.js";

export interface IBsOffcanvasBtnclose extends IBsBtnclose {
	dismiss?: "offcanvas";
	target?: string;
}

const convert = (attr: IBsOffcanvasBtnclose) => {
	attr.dismiss ??= "offcanvas";

	attr = mergeObject(
		{
			data: { "bs-dismiss": attr.dismiss, "bs-target": attr.target },
		},
		attr
	);

	delete attr.dismiss;
	delete attr.target;

	return attr;
};

export class btnclose extends TBtnclose {
	constructor(); //#1
	constructor(attr: IBsOffcanvasBtnclose); //#2
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}
