import { elem } from "../../../interface/core/elem.js";
import { bsConstructor } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/util/mergeObject.js";
import { ul as BUl } from "../../../bootstrap/ul.js";
import { item } from "./item.js";
import { link } from "./link.js";
import { button } from "./button.js";
import { container as Container } from "../../../interface/bootstrap/nav/header/container.js";

export class container extends BUl {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Container>("elem", arg));
	}

	convert(attr: Container) {
		//WARNING! attr should be Container
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

		return super.convert(attr);
	}
}
