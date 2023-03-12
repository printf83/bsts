import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { UUID } from "../../core/fn/uuid.js";
import { h } from "../../html/h.js";

const convert = (attr: IAttr) => {
	attr.id = attr.id || UUID();
	attr.class = mergeClass(attr.class, "modal-title");
	return attr;
};

export class title extends h {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(5, bsConstArg("elem", convert, arg));
	}
}
