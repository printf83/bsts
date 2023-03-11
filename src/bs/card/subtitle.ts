import { IAttr, IElem } from "../../core/base/tag.js";
import { conProp } from "../../core/fn/arg.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { h } from "../../ht/h.js";

const convert = (attr: IAttr): IAttr => {
	attr.class = mergeClass(attr.class, "card-subtitle");
	return attr;
};

export class subtitle extends h {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(6, conProp("elem", convert, arg));
	}
}
