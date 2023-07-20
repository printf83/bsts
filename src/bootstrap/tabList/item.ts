import { bootstrapType } from "../../core/bootstrap.js";
import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { a, A } from "../../html/a.js";

export interface Item extends A {
	active?: boolean;
	action?: boolean;
	color?: bootstrapType.color;
	role?: "tab";
	autoInit?: boolean;
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
				"bs-toggle": attr.autoInit ? "list" : undefined,
			},
		},
		attr
	);

	if (attr.autoInit) {
		attr.role ??= "tab";
	}

	delete attr.active;
	delete attr.action;
	delete attr.color;
	delete attr.autoInit;

	return attr;
};

export class item extends a {
	constructor();
	constructor(attr: Item);
	constructor(elem: IElem);
	constructor(attr: Item, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Item>("elem", arg)));
	}
}
