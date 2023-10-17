import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { span } from "../../html/span.js";
import { mergeClass } from "../../core/mergeClass.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "dropdown-item-text");

	return attr;
};

export class text extends span {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
