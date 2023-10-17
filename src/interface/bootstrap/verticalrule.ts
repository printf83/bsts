import { IAttr } from "../core/tag.js";
import { bsConsNoElemArg } from "../core/bootstrap.js";
import { div } from "../html/div.js";
import { mergeClass } from "../core/mergeClass.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, ["vr"]);
	attr.elem = ` `; //" ";
	return attr;
};

export class verticalrule extends div {
	constructor();
	constructor(attr: IAttr);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}
