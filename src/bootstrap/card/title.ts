import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { h5 } from "../../html/h5.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "card-title");
	return attr;
};

export class title extends h5 {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: elem);
	constructor(attr: IAttr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
