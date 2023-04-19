import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { div } from "../../html/div.js";
import { btnclose } from "./btnclose.js";

export interface IBsModalHeader extends IAttr {
	close?: boolean;
}

const convert = (attr: IBsModalHeader) => {
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
	constructor(attr: IBsModalHeader); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsModalHeader, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsModalHeader>("elem", arg)));
	}
}

export const Header = (AttrOrElem?: IBsModalHeader | IElem, Elem?: IElem) =>
	genTagClass<header, IBsModalHeader>(header, AttrOrElem, Elem);
