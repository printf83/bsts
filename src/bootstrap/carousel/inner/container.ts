import { IAttr, IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { div } from "../../../html/div.js";
import { mergeObject } from "../../../core/mergeObject.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "carousel-inner");
	attr = mergeObject({ class: "carousel-inner", rounded: true }, attr);
	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
