import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { div } from "../../html/div.js";

const convert = (attr: attr) => {
	attr.class = mergeClass(attr.class, "card-img-overlay");
	return attr;
};

export class imgoverlay extends div {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem);
	constructor(attr: attr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
