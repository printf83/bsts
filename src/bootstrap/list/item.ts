import { bootstrapType } from "../../core/bootstrap.js";
import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { IAttrTagLi, li } from "../../html/li.js";

export interface IAttrBSListItem extends IAttrTagLi {
	active?: boolean;
	disabled?: boolean;
	action?: boolean;
	color?: bootstrapType.color[number];
}

const convert = (attr: IAttrBSListItem) => {
	attr = mergeObject(
		{
			class: [
				"list-group-item",
				attr.action ? "list-group-item-action" : undefined,
				attr.color ? `list-group-item-${attr.color}` : undefined,
				attr.active ? "active" : undefined,
				attr.disabled ? "disabled" : undefined,
			],
			aria: { disabled: attr.disabled ? "true" : undefined },
		},
		attr
	);

	delete attr.active;
	delete attr.disabled;
	delete attr.action;
	delete attr.color;

	return attr;
};

export class item extends li {
	constructor(); //#1
	constructor(attr: IAttrBSListItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSListItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSListItem>("elem", convert, arg));
	}
}
