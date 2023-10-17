import { IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { Li, li } from "../../../html/li.js";
import { Button, button } from "./button.js";
import { Link, link } from "./link.js";

export interface Item extends Li {
	role?: "presentation";
	dropdown?: boolean;

	link?: Link;
	button?: Button;
}

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
	constructor(elem: IElem);
	constructor(attr: Item, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Item>("elem", arg)));
	}
}
