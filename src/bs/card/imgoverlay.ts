import { IAttr, IElem } from "../../core/base/tag.js";
import { conProp } from "../../core/fn/arg.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { div } from "../../ht/div.js";

const convert = (attr: IAttr): IAttr => {
	attr.class = mergeClass(attr.class, "card-img-overlay");
	return attr;
};

export class imgoverlay extends div {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conProp("elem", convert, arg));
	}
}
