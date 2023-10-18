import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { blockquote } from "../../html/blockquote.js";

const convert = (attr: attr) => {
	attr.class = mergeClass(attr.class, "blockquote");
	return attr;
};

export class container extends blockquote {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem);
	constructor(attr: attr, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
