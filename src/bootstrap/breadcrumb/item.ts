import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { a } from "../../html/a.js";
import { li } from "../../html/li.js";
import { li as Li } from "../../interface/html/li.js";
import { item as Item } from "../../interface/bootstrap/breadcrumb/item.js";

export class item extends li {
	constructor();
	constructor(attr: Item);
	constructor(elem: elem | elem[]);
	constructor(attr: Item, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Item>("elem", arg));
	}

	convert(attr: Item) {
		let active = attr.active;

		if (active) {
			delete attr.href;
		}

		delete attr.color;
		delete attr.active;

		return super.convert({
			class: ["breadcrumb-item", active ? "active" : undefined],
			aria: { current: active ? "page" : undefined },
			elem: new a(attr),
		} as Li);
	}
}
