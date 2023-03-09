import { IAttr, IElem } from "../core/base/tag.js";
import { conElem } from "../core/fn/arg.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { div } from "../ht/div.js";

const convert = (attr: IAttr) => {
	attr.class = mergeClass(attr.class, "form-floating");
	return attr;
};

export class formfloating extends div {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conElem(convert, arg));
	}
}
