import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { a, IAttrTagA } from "../../html/a.js";

const convert = (attr: IAttrTagA) => {
	attr.class = mergeClass(attr.class, "card-link");
	return attr;
};

export class link extends a {
	constructor(); //#1
	constructor(attr: IAttrTagA); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagA, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrTagA>("elem", convert, arg));
	}
}
