import { bootstrapType } from "../../core/base/bootstrap.js";
import { IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { a, IAttrTagA } from "../../html/a.js";

export interface IAttrBSListDivItem extends IAttrTagA {
	active?: boolean;
	disabled?: boolean;
	action?: boolean;
	color?: bootstrapType.color[number];
	toggle?: boolean;
	role?: "tab";
}

const convert = (attr: IAttrBSListDivItem) => {
	attr = mergeObject(
		{
			class: [
				"list-group-item",
				attr.action ? "list-group-item-action" : undefined,
				attr.color ? `list-group-item-${attr.color}` : undefined,
				attr.active ? "active" : undefined,
				attr.disabled ? "disabled" : undefined,
			],
			aria: {
				disabled: attr.disabled ? "true" : undefined,
			},
			data: {
				"bs-toggle": attr.toggle ? "list" : undefined,
			},
		},
		attr
	);

	if (attr.toggle) {
		attr.role ??= "tab";
	}

	delete attr.active;
	delete attr.disabled;
	delete attr.action;
	delete attr.color;
	delete attr.toggle;

	return attr;
};

export class item extends a {
	constructor(); //#1
	constructor(attr: IAttrBSListDivItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSListDivItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSListDivItem>("elem", convert, arg));
	}
}
