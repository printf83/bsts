import { bootstrapType } from "../../core/bootstrap.js";
import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { a, ITagA } from "../../html/a.js";

export interface IBsListDivItem extends ITagA {
	active?: boolean;
	action?: boolean;
	color?: bootstrapType.color;
	toggle?: boolean;
	role?: "tab";
}

const convert = (attr: IBsListDivItem) => {
	if (attr.disabled && attr.href) {
		delete attr.href;
	}

	attr = mergeObject(
		{
			class: [
				"list-group-item",
				attr.action ? "list-group-item-action" : undefined,
				attr.color ? `list-group-item-${attr.color}` : undefined,
				attr.active ? "active" : undefined,
			],
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
	delete attr.action;
	delete attr.color;
	delete attr.toggle;

	return attr;
};

export class item extends a {
	constructor(); //#1
	constructor(attr: IBsListDivItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsListDivItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsListDivItem>("elem", arg)));
	}
}
