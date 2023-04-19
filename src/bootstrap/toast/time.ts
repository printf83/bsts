import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { small } from "../../html/small.js";
import { mergeObject } from "../../core/mergeObject.js";

const convert = (attr: IAttr) => {
	attr.elem ??= new Date().getTime().toString();

	if (attr.elem) {
		if (typeof attr.elem === "string") {
			if (!isNaN(parseInt(attr.elem))) {
				attr = mergeObject({ data: { "bs-timer": parseInt(attr.elem) } }, attr);
				attr.elem = "Just now";
			}
		}
	}

	return attr;
};

export class time extends small {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
