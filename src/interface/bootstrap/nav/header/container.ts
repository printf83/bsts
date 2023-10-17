import { IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { Ul, ul } from "../../../html/ul.js";
import { Item, item } from "./item.js";
import { Link, link } from "./link.js";
import { Button, button } from "./button.js";

export interface Container extends Omit<Ul, "item"> {
	type?: "tab" | "pill" | "underline";
	itemWidth?: "fill" | "justified";
	vertical?: true;
	role?: "tablist";
	item?: Item | Item[];
	link?: Link | Link[];
	button?: Button | Button[];
}

const convert = (attr: Container): Ul => {
	attr = mergeObject(
		{
			class: [
				"nav",
				attr.type ? `nav-${attr.type}${attr.type !== "underline" ? "s" : ""}` : undefined,
				attr.itemWidth ? `nav-${attr.itemWidth}` : undefined,
				attr.vertical ? "flex-column" : undefined,
			],
			aria: {
				orientation: attr.vertical ? "vertical" : undefined,
			},
		},
		attr
	);

	if (attr.item && !attr.link && !attr.button && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new item(i);
		});
	} else if (!attr.item && attr.link && !attr.button && !attr.elem) {
		if (!Array.isArray(attr.link)) {
			attr.link = [attr.link];
		}

		attr.elem = attr.link.map((i) => {
			return new item(new link(i));
		});
	} else if (!attr.item && !attr.link && attr.button && !attr.elem) {
		if (!Array.isArray(attr.button)) {
			attr.button = [attr.button];
		}

		attr.elem = attr.button.map((i) => {
			return new item(new button(i));
		});
	}

	delete attr.item;
	delete attr.link;
	delete attr.button;
	delete attr.type;
	delete attr.itemWidth;
	delete attr.vertical;

	return attr as Ul;
};

export class container extends ul {
	constructor();
	constructor(attr: Container);
	constructor(elem: IElem);
	constructor(attr: Container, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
