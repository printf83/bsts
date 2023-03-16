import { bsConstArg } from "../../core/base/bootstrap.js";
import { IElem } from "../../core/base/tag.js";
import { IAttrTagP, p } from "../../html/p.js";

const convert = (attr: IAttrTagP) => {
	return attr;
};

export class text extends p {
	constructor(); //#1
	constructor(attr: IAttrTagP); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagP, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrTagP>("elem", convert, arg));
	}
}
