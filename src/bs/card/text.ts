import { IAttr, IElem } from "../../core/base/tag.js";
import { conProp } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { p } from "../../ht/p.js";

const convert = (attr: IAttr): IAttr => {
	attr.class = mergeClass(attr.class, "card-text");
	return attr;
};

export class text extends p {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conProp("elem", convert, arg));
	}
}
