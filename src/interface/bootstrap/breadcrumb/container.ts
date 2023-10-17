import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { nav } from "../../html/nav.js";
import { ol } from "../../html/ol.js";
import { Item, item } from "./item.js";
import { mergeClass } from "../../core/mergeClass.js";

export interface Container extends IAttr {
	divider?: string;
	item?: Item | Item[];
}

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
	constructor(elem: IElem);
	constructor(attr: Container, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
