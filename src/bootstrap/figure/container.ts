import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { figure } from "../../html/figure.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "figure");
	return attr;
};

export class container extends figure {
	constructor();
	constructor(attr: IAttr);
	constructor(elem: elem);
	constructor(attr: IAttr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
