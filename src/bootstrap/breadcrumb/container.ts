import { IAttr, IElem } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { nav } from "../../html/nav.js";
import { ol } from "../../html/ol.js";
import { item } from "./item.js";
import { item as Item } from "../../interface/bootstrap/breadcrumb/item.js";
import { container as Container } from "../../interface/bootstrap/breadcrumb/container.js";

const convert = (attr: Container) => {
	attr.class = mergeClass(attr.class, "breadcrumb");

	if (!attr.elem) {
		if (attr.item) {
			let tItem: Item[] = Array.isArray(attr.item) ? attr.item : [attr.item];

			attr.elem = tItem.map((i, ix) => {
				if (ix === tItem.length - 1) {
					i.active ??= true;
				}

				return new item(i);
			});
		}
	}
	let label = attr.label;
	let divider = attr.divider;

	delete attr.label;
	delete attr.divider;
	delete attr.item;

	return {
		label: label,
		elem: new ol(attr as IAttr),
		style: {
			"--bs-breadcrumb-divider": divider ? divider : undefined,
		},
	};
};

export class container extends nav {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem);
	constructor(attr: Container, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
