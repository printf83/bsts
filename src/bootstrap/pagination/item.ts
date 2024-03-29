import { bsConstructor } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { a } from "../../html/a.js";
import { button } from "../../html/button.js";
import { li } from "../../html/li.js";
import { item as Item } from "../../interface/bootstrap/pagination/item.js";
import { elem } from "../../interface/core/elem.js";
import { li as Li } from "../../interface/html/li.js";

export class item extends li {
	constructor();
	constructor(attr: Item);
	constructor(elem: elem | elem[]);
	constructor(attr: Item, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Item>("elem", arg));
	}

	convert(attr: Item) {
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
		return super.convert(liAttr);
	}
}
