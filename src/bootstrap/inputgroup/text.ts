import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { span } from "../../html/span.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "input-group-text");
	return attr;
};

export class text extends span {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: elem);
	constructor(attr: IAttr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
