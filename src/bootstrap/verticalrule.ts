import { IAttr } from "../core/base/tag.js";
import { bsConsNoElemArg } from "../core/base/bootstrap.js";
import { div } from "../html/div.js";
import { mergeClass } from "../core/fn/mergeClass.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, ["vr"]);
	return attr;
};

export class verticalrule extends div {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}
