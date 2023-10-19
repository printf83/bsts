import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { figcaption } from "../../html/figcaption.js";

const convert = (attr: attr) => {
	attr.class = mergeClass(attr.class, "blockquote-footer");
	return attr;
};

export class caption extends figcaption {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
