import { bsConstArg } from "../../../src/core/base/bootstrap.js";
import { IElem } from "../../../src/core/base/tag.js";
import { mergeObject } from "../../../src/core/fn/mergeObject.js";
import { IAttrTagP } from "../../../src/html/p.js";
import { h } from "../../../src/index.js";

const convert = (attr: IAttrTagP) => {
	attr = mergeObject({ class: "example-description", lead: true }, attr);
	return attr;
};

export class description extends h.p {
	constructor(); //#1
	constructor(attr: IAttrTagP); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagP, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrTagP>("elem", convert, arg));
	}
}
