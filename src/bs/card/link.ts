import { IElem } from "../../core/base/tag.js";
import { conElem } from "../../core/fn/arg.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { a, IAttrTagA } from "../../ht/a.js";

const convert = (attr: IAttrTagA): IAttrTagA => {
	attr.class = mergeClass(attr.class, "card-link");
	return attr;
};

export class link extends a {
	constructor(); //#1
	constructor(attr: IAttrTagA); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagA, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conElem<IAttrTagA>(convert, arg));
	}
}
