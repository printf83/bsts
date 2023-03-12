import { bootstrapType } from "../../core/base/bootstrap.js";
import { IElem } from "../../core/base/tag.js";
import { conProp } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { IAttrTagLi, li } from "../../ht/li.js";

export interface IAttrBSListItem extends IAttrTagLi {
	active?: boolean;
	disabled?: boolean;
	action?: boolean;
	color?: bootstrapType.color[number];
}

const convert = (attr: IAttrBSListItem): IAttrTagLi => {
	attr = mergeObject(
		{
			class: [
				"list-group-item",
				attr.action ? "list-group-item-action" : "",
				attr.color ? `list-group-item-${attr.color}` : "",
				attr.active ? "active" : "",
				attr.disabled ? "disabled" : "",
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
		super(conProp<IAttrBSListItem>("elem", convert, arg));
	}
}
