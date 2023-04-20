import { bsConsNoElemArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { genTagClass } from "../../core/tag.js";
import { btnclose as TBtnclose, IBsBtnclose } from "../btnclose.js";

export interface IBsModalBtnclose extends IBsBtnclose {
	dismiss?: "modal";
}

const convert = (attr: IBsModalBtnclose) => {
	attr.dismiss ??= "modal";

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
	constructor(attr: IBsModalBtnclose); //#2
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}

export const Btnclose = (Attr?: IBsModalBtnclose) => genTagClass<btnclose, IBsModalBtnclose>(btnclose, Attr);
