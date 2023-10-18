import { elem } from "../../../interface/core/elem.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { li } from "../../../html/li.js";
import { button } from "./button.js";
import { link } from "./link.js";
import { item as Item } from "../../../interface/bootstrap/nav/header/item.js";

const convert = (attr: Item) => {
	attr.class = mergeClass(attr.class, ["nav-item", attr.dropdown ? "dropdown" : undefined]);

	if (attr.link && !attr.button && !attr.elem) {
		attr.elem = new link(attr.link);
	} else if (!attr.link && attr.button && !attr.elem) {
		attr.elem = new button(attr.button);
	}

	delete attr.dropdown;
	delete attr.link;
	delete attr.button;

	return attr;
};

export class item extends li {
	constructor();
	constructor(attr: Item);
	constructor(elem: elem | elem[]);
	constructor(attr: Item, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Item>("elem", arg)));
	}
}
