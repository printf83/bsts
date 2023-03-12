import { conNoElem } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { btnclose as TBtnclose, IAttrBSBtnclose } from "../btnclose.js";

export interface IAttrBSOffcanvasBtnclose extends IAttrBSBtnclose {
	dismiss?: "offcanvas";
	target?: string;
}

const convert = (attr: IAttrBSOffcanvasBtnclose): IAttrBSBtnclose => {
	attr.dismiss = attr.dismiss || "offcanvas";

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
	constructor(attr: IAttrBSOffcanvasBtnclose); //#2
	constructor(...arg: any[]) {
		super(conNoElem(convert, arg));
	}
}
