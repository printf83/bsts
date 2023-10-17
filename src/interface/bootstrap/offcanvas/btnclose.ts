import { bsConsNoElemArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { btnclose as TBtnclose, Btnclose as IBtnclose } from "../btnclose.js";

export interface Btnclose extends IBtnclose {
	dismiss?: "offcanvas";
	target?: string;
}

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
