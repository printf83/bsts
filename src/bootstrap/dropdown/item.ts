import { IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { a, IAttrTagA } from "../../html/a.js";

export interface IAttrBSDropdownItem extends IAttrTagA {
	active?: boolean;
	disabled?: boolean;
}

const convert = (attr: IAttrBSDropdownItem) => {
	attr = mergeObject(
		{
			class: ["dropdown-item", attr.active ? "active" : "", attr.disabled ? "disabled" : ""],
			href: attr.href || "#",
			aria: { current: attr.active ? "true" : undefined },
		},
		attr
	);

	delete attr.active;
	delete attr.disabled;

	return attr;
};

export class item extends a {
	constructor(); //#1
	constructor(attr: IAttrBSDropdownItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSDropdownItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSDropdownItem>("elem", convert, arg));
	}
}