import { bsConstArg } from "../../core/base/bootstrap.js";
import { IElem } from "../../core/base/tag.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { IAttrTagP, p } from "../../html/p.js";

const convert = (attr: IAttrTagP) => {
	attr = mergeObject({ class: "description", lead: true }, attr);
	return attr;
};

export class description extends p {
	constructor(); //#1
	constructor(attr: IAttrTagP); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagP, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrTagP>("elem", convert, arg));
	}
}
