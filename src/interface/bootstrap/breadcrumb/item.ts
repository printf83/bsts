import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { a, A } from "../../html/a.js";
import { Li, li } from "../../html/li.js";

export interface Item extends A {
	active?: boolean;
	href?: string;
}

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
	constructor(elem: IElem);
	constructor(attr: Item, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Item>("elem", arg)));
	}
}
