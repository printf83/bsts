import { bsConsNoElemArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";

import { btnclose as TBtnclose } from "../btnclose.js";
import { btnclose as Btnclose } from "../../interface/bootstrap/alert/btnclose.js";

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
