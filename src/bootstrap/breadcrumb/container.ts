import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { nav } from "../../html/nav.js";
import { ol } from "../../html/ol.js";
import { Item, item } from "./item.js";

export interface Container extends IAttr {
	divider?: string;
	item?: Item | Item[];
}

const convert = (attr: Container) => {
	attr = mergeObject(
		{
			style: {
				"--bs-breadcrumb-divider": attr.divider ? attr.divider : undefined,
			},
		},
		attr
	);

	if (attr.elem) {
		attr.elem = new ol(
			{
				class: "breadcrumb",
			},
			attr.elem
		);
	} else {
		if (attr.item) {
			let tItem: Item[] = Array.isArray(attr.item) ? attr.item : [attr.item];

			attr.elem = new ol(
				{
					class: "breadcrumb",
				},
				tItem.map((i, ix) => {
					if (ix === tItem.length - 1) {
						i.active ??= true;
					}

					return new item(i);
				})
			);
		} else {
			attr.elem = new ol({
				class: "breadcrumb",
			});
		}
	}

	delete attr.item;

	return attr;
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

export const Container = (AttrOrElem?: Container | IElem, Elem?: IElem) =>
	genTagClass<container, Container>(container, AttrOrElem, Elem);
