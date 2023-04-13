import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { UUID } from "../../core/uuid.js";
import { h } from "../../html/h.js";
import { mergeObject } from "../../core/mergeObject.js";

const convert = (attr: IAttr) => {
	attr = mergeObject(
		{
			id: attr.id || UUID(),
			h: 5,
			class: "modal-title",
		},
		attr
	);

	return attr;
};

export class title extends h {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(1, bsConstArg("elem", convert, arg));
	}
}
