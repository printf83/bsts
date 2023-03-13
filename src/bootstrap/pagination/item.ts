import { IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { IAttrTagLi, li } from "../../html/li.js";
import { span } from "../../html/span.js";
import { a } from "../../html/a.js";
import { mergeObject } from "../../core/fn/mergeObject.js";

export interface IAttrBSPaginationItem extends IAttrTagLi {
	active?: boolean;
	disabled?: boolean;
	href?: string;
	label?: string;
}

const convert = (attr: IAttrBSPaginationItem) => {
	let liAttr: IAttrTagLi = {
		class: ["page-item", attr.active ? "active" : "", attr.disabled ? "disabled" : ""],
		aria: { current: attr.active ? "page" : undefined },
	};

	delete attr.active;
	delete attr.disabled;

	attr = mergeObject({ class: "page-link", aria: { label: attr.label } }, attr);

	delete attr.label;

	if (attr.href) {
		liAttr.elem = new a(attr);
	} else {
		liAttr.elem = new span(attr);
	}

	return liAttr;
};

export class item extends li {
	constructor(); //#1
	constructor(attr: IAttrBSPaginationItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSPaginationItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSPaginationItem>("elem", convert, arg));
	}
}
