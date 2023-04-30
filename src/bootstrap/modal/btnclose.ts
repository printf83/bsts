import { bsConsNoElemArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { genTagClass } from "../../core/tag.js";
import { btnclose as TBtnclose, Btnclose as IBtnclose } from "../btnclose.js";

export interface Btnclose extends IBtnclose {
	dismiss?: "modal";
	target?: string;
}

const convert = (attr: Btnclose) => {
	attr.dismiss ??= "modal";

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
	constructor(attr: Btnclose); //#2
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}

export const Btnclose = (Attr?: Btnclose) => genTagClass<btnclose, Btnclose>(btnclose, Attr);
