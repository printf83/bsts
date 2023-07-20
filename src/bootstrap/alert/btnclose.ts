import { bsConsNoElemArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";

import { btnclose as TBtnclose, Btnclose as IBtnclose } from "../btnclose.js";

export interface Btnclose extends IBtnclose {
	dismiss?: "alert";
}

const convert = (attr: Btnclose) => {
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
	constructor();
	constructor(attr: Btnclose);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}
