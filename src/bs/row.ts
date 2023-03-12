import { IAttr, IElem } from "../core/base/tag.js";
import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../ht/div.js";

const convert = (attr: IAttr) => {
	attr = mergeObject(
		{
			row: true,
		},
		attr
	);

	return attr;
};

export class row extends div {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg("elem", convert, arg));
	}
}
