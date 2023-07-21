import { IAttr, IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { nav } from "../../../html/nav.js";
import { div } from "../../../html/div.js";
import { Button, button } from "./button.js";
import { Link, link } from "./link.js";

export interface ContainerNav extends IAttr {
	type?: "tab" | "pill" | "underline";
	itemWidth?: "fill" | "justified";
	vertical?: true;
	role?: "tablist";
	item?: Button | Button[];
	link?: Link | Link[];
}

const convert = (attr: ContainerNav) => {
	attr = mergeObject(
		{
			class: [
				"nav",
				attr.type ? `nav-${attr.type}s` : undefined,
				attr.itemWidth ? `nav-${attr.itemWidth}` : undefined,
				attr.vertical ? "flex-column" : undefined,
			],
			aria: {
				orientation: attr.vertical ? "vertical" : undefined,
			},
		},
		attr
	);

	if (attr.item && !attr.link && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new button(i);
		});
	} else if (!attr.item && attr.link && !attr.elem) {
		if (!Array.isArray(attr.link)) {
			attr.link = [attr.link];
		}

		attr.elem = attr.link.map((i) => {
			return new link(i);
		});
	}

	delete attr.item;
	delete attr.link;
	delete attr.type;
	delete attr.itemWidth;
	delete attr.vertical;

	return { elem: new div(attr) };
};

export class containerNav extends nav {
	constructor();
	constructor(attr: ContainerNav);
	constructor(elem: IElem);
	constructor(attr: ContainerNav, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<ContainerNav>("elem", arg)));
	}
}
