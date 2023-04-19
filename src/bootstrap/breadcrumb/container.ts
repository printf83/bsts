import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { nav } from "../../html/nav.js";
import { ol } from "../../html/ol.js";
import { IBsBreadcrumbItem, item } from "./item.js";

export interface IBsBreadcrumbContainer extends IAttr {
	divider?: string;
	item?: IBsBreadcrumbItem | IBsBreadcrumbItem[];
}

const convert = (attr: IBsBreadcrumbContainer) => {
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
			let tItem: IBsBreadcrumbItem[] = Array.isArray(attr.item) ? attr.item : [attr.item];

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
	constructor(); //#1
	constructor(attr: IBsBreadcrumbContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsBreadcrumbContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsBreadcrumbContainer>("elem", convert, arg));
	}
}
