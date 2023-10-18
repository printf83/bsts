import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { p } from "../../html/p.js";

const convert = (attr: attr) => {
	attr.class = mergeClass(attr.class, "card-text");
	return attr;
};

export class text extends p {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem);
	constructor(attr: attr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
