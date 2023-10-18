import { bsConsNoElemArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { btnclose as TBtnclose } from "../btnclose.js";
import { btnclose as Btnclose } from "../../interface/bootstrap/offcanvas/btnclose.js";

const convert = (attr: Btnclose) => {
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
	constructor();
	constructor(attr: Btnclose);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}
