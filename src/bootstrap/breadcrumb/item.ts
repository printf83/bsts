import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { a } from "../../html/a.js";
import { li } from "../../html/li.js";
import { li as Li } from "../../interface/html/li.js";
import { item as Item } from "../../interface/bootstrap/breadcrumb/item.js";

const convert = (attr: Item) => {
	let active = attr.active;

	if (active) {
		delete attr.href;
	}

	delete attr.color;
	delete attr.active;

	return {
		class: ["breadcrumb-item", active ? "active" : undefined],
		aria: { current: active ? "page" : undefined },
		elem: new a(attr),
	} as Li;
};

export class item extends li {
	constructor();
	constructor(attr: Item);
	constructor(elem: elem);
	constructor(attr: Item, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Item>("elem", arg)));
	}
}
