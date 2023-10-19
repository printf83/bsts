import { attr } from "../../../interface/core/attr.js";
import { elem } from "../../../interface/core/elem.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/util/mergeClass.js";
import { div } from "../../../html/div.js";
import { mergeObject } from "../../../core/util/mergeObject.js";

const convert = (attr: attr) => {
	attr.class = mergeClass(attr.class, "carousel-inner");
	attr = mergeObject({ class: "carousel-inner" }, attr);
	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
