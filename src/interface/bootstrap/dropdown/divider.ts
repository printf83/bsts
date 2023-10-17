import { IAttr } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
import { hr } from "../../html/hr.js";
import { bsConsNoElemArg } from "../../core/bootstrap.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "dropdown-divider");
	return attr;
};

export class divider extends hr {
	constructor();
	constructor(attr: IAttr);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}
