import { elem } from "../../../interface/core/elem.js";
import { bsConstructor } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/util/mergeObject.js";
import { nav } from "../../../html/nav.js";
import { div } from "../../../html/div.js";
import { button } from "./button.js";
import { link } from "./link.js";
import { containerNav as ContainerNav } from "../../../interface/bootstrap/nav/header/containerNav.js";

export class containerNav extends nav {
	constructor();
	constructor(attr: ContainerNav);
	constructor(elem: elem | elem[]);
	constructor(attr: ContainerNav, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<ContainerNav>("elem", arg));
	}

	convert(attr: ContainerNav) {
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

		return super.convert({ elem: new div(attr) });
	}
}
