import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h } from "../../html/h.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "card-subtitle");
	return attr;
};

export class subtitle extends h {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super(6, convert(bsConstArg("elem", arg)));
	}
}
