import { IAttr, IElem } from "../../core/base/tag.js";
import { conProp } from "../../core/fn/arg.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { div } from "../../ht/div.js";
import { btnclose } from "./btnclose.js";

export interface IAttrBSModalHeader extends IAttr {
	close?: boolean;
}

const convert = (attr: IAttrBSModalHeader): IAttr => {
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
		super(conProp<IAttrBSModalHeader>("elem", convert, arg));
	}
}
