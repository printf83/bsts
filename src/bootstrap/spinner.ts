import { IAttr, IElem } from "../core/tag.js";
import { bootstrapType, bsConstArg } from "../core/bootstrap.js";
import { mergeClass } from "../core/mergeClass.js";
import { span } from "../html/span.js";
import { visuallyhidden } from "./visuallyhidden.js";
import { mergeObject } from "../core/mergeObject.js";

export interface IAttrBSSpinner extends IAttr {
	type?: "border" | "grow";
	role?: "status";
	color?: bootstrapType.textColor[number];
}

const convert = (attr: IAttrBSSpinner) => {
	attr.role ??= "status";
	attr.type ??= "border";
	attr.textColor ??= attr.color || attr.textColor;
	attr.elem ??= "Loading...";

	attr.class = mergeClass(attr.class, [`spinner-${attr.type}`]);

	if (attr.elem === "") {
		attr = mergeObject({ aria: { hidden: "true" } }, attr);
	} else {
		if (attr.elem) {
			attr.elem = new visuallyhidden(attr.elem);
		}
	}

	delete attr.type;
	delete attr.color;

	return attr;
};

export class spinner extends span {
	constructor(); //#1
	constructor(attr: IAttrBSSpinner); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSSpinner, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSSpinner>("elem", convert, arg));
	}
}
