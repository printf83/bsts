import { IAttr, IElem, genTagClass } from "../../../core/tag.js";
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
	constructor(); //#1
	constructor(attr: ContainerNav); //#2
	constructor(elem: IElem); //#3
	constructor(attr: ContainerNav, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<ContainerNav>("elem", arg)));
	}
}

export const ContainerNav = (AttrOrElem?: ContainerNav | IElem, Elem?: IElem) =>
	genTagClass<containerNav, ContainerNav>(containerNav, AttrOrElem, Elem);
