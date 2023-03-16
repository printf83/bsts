import { bsConstArg } from "../../core/base/bootstrap.js";
import { IAttr, IElem } from "../../core/base/tag.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { h } from "../../html/h.js";

const convert = (attr: IAttr) => {
	attr = mergeObject(
		{
			class: "title",
			fontDisplay: 6,
			fontWeight: "normal",
		},
		attr
	);

	return attr;
};

export class title extends h {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(1, bsConstArg("elem", convert, arg));
	}
}
