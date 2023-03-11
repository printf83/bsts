import { IAttr, IElem } from "../../core/base/tag.js";
import { conProp } from "../../core/fn/arg.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { div } from "../../ht/div.js";

const convert = (attr: IAttr): IAttr => {
	attr = mergeObject({ class: "toast-container", padding: 3 }, attr);
	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conProp("elem", convert, arg));
	}
}
