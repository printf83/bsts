import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { mergeClass } from "../../core/util/mergeClass.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { nav } from "../../html/nav.js";
import { ol } from "../../html/ol.js";
import { item } from "./item.js";
import { item as Item } from "../../interface/bootstrap/breadcrumb/item.js";
import { container as Container } from "../../interface/bootstrap/breadcrumb/container.js";

export class container extends nav {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Container>("elem", arg));
	}

	convert(attr: Container) {
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

		return super.convert({
			label: label,
			elem: new ol(attr as attr),
			style: {
				"--bs-breadcrumb-divider": divider ? divider : undefined,
			},
		});
	}
}
