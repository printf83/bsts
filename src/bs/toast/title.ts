import { IAttr, IElem } from "../../core/base/tag.js";
import { conElem } from "../../core/fn/arg.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { strong } from "../../ht/strong.js";

const convert = (attr: IAttr): IAttr => {
	attr = mergeObject({ marginEnd: "auto" }, attr);
	return attr;
};

export class title extends strong {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conElem(convert, arg));
	}
}
