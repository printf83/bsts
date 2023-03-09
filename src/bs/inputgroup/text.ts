import { IAttr, IElem } from "../../core/base/tag.js";
import { conElem } from "../../core/fn/arg.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { span } from "../../ht/span.js";

const convert = (attr: IAttr): IAttr => {
	attr.class = mergeClass(attr.class, "input-group-text");
	return attr;
};

export class text extends span {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conElem(convert, arg));
	}
}
