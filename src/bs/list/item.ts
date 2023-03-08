import { bootstrapType } from "../../core/base/bootstrap.js";
import { IElem, isAttr } from "../../core/base/tag.js";
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
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSListItem>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({}), arg[0]);
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(arg[0]), arg[1]);
		}
	}
}
