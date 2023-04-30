import { bootstrapType } from "../../core/bootstrap.js";
import { genTagClass, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { a, A } from "../../html/a.js";

export interface Item extends A {
	active?: boolean;
	action?: boolean;
	color?: bootstrapType.color;
	toggle?: boolean;
	role?: "tab";
}

const convert = (attr: Item) => {
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
	constructor(attr: Item); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Item, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Item>("elem", arg)));
	}
}

export const Item = (AttrOrElem?: Item | IElem, Elem?: IElem) => genTagClass<item, Item>(item, AttrOrElem, Elem);
