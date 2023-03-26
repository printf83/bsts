import { bsConstArg } from "../../../src/core/base/bootstrap.js";
import { IElem } from "../../../src/core/base/tag.js";
import { IAttrTagP } from "../../../src/html/p.js";
import { h } from "../../../src/index.js";

const convert = (attr: IAttrTagP) => {
	return attr;
};

export class text extends h.p {
	constructor(); //#1
	constructor(attr: IAttrTagP); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagP, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrTagP>("elem", convert, arg));
	}
}
