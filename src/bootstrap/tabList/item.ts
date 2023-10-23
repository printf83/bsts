import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { a } from "../../html/a.js";
import { item as Item } from "../../interface/bootstrap/tabList/item.js";

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
	constructor(elem: elem | elem[]);
	constructor(attr: Item, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor<Item>("elem", arg)));
	}

	convert(attr: Item) {
		return super.convert(attr);
	}
}
