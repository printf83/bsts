import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { div } from "../../html/div.js";
import { btnclose } from "./btnclose.js";

export interface IAttrBSModalHeader extends IAttr {
	close?: boolean;
}

const convert = (attr: IAttrBSModalHeader) => {
	attr.class = mergeClass(attr.class, "modal-header");

	if (attr.close) {
		if (attr.elem) {
			if (Array.isArray(attr.elem)) {
				attr.elem.push(new btnclose());
			} else {
				attr.elem = [attr.elem, new btnclose()];
			}
		} else {
			attr.elem = [new btnclose()];
		}
	}

	delete attr.close;

	return attr;
};

export class header extends div {
	constructor(); //#1
	constructor(attr: IAttrBSModalHeader); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSModalHeader, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSModalHeader>("elem", convert, arg));
	}
}
