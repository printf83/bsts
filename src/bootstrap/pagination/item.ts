import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { li } from "../../html/li.js";
import { button } from "../../html/button.js";
import { a } from "../../html/a.js";
import { mergeClass } from "../../core/mergeClass.js";
import { li as Li } from "../../interface/html/li.js";
import { item as Item } from "../../interface/bootstrap/pagination/item.js";

const convert = (attr: Item) => {
	let liAttr: Li = {
		class: ["page-item", attr.active ? "active" : undefined, attr.disabled ? "disabled" : undefined],
		aria: { current: attr.active ? "page" : undefined },
	};

	if (attr.disabled) {
		attr.href = undefined;
	}

	delete attr.active;

	attr.class = mergeClass(attr.class, "page-link");

	if (attr.href) {
		liAttr.elem = new a(attr);
	} else {
		liAttr.elem = new button(attr);
	}

	return liAttr;
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
