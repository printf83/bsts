import { bootstrapType } from "../../core/base/bootstrap.js";
import { IElem, isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { IAttrTagLi, li } from "../../ht/li.js";

export interface IAttrListItem extends IAttrTagLi {
	action?: boolean;
	color?: bootstrapType.color[number];
	role?: "button"; //hack only to make list-group-item-action clickable
}

const convert = (attr: IAttrListItem): IAttrTagLi => {
	attr.class = mergeClass(attr.class, [
		"list-group-item",
		attr.action ? "list-group-item-action" : "",
		attr.color ? `list-group-item-${attr.color}` : "",
	]);

	//WARNING!
	//this is not default BS behavior
	//this is only hack
	if (attr.action) {
		attr.role = "button";
	}

	delete attr.action;
	delete attr.color;

	return attr;
};

export class item extends li {
	constructor(); //#1
	constructor(attr: IAttrListItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrListItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrListItem>(arg[0])) {
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
