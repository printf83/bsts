import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { nav } from "../../html/nav.js";
import { ol } from "../../html/ol.js";
import { IAttrBSBreadcrumbItem, item } from "./item.js";

export interface IAttrBSBreadcrumbContainer extends IAttr {
	divider?: string;
	item?: IAttrBSBreadcrumbItem | IAttrBSBreadcrumbItem[];
}

const convert = (attr: IAttrBSBreadcrumbContainer) => {
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
			let tItem: IAttrBSBreadcrumbItem[] = Array.isArray(attr.item) ? attr.item : [attr.item];

			attr.elem = new ol(
				{
					class: "breadcrumb",
				},
				tItem.map((i, ix) => {
					if (ix === tItem.length - 1) {
						i.active = i.active || true;
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
	constructor(attr: IAttrBSBreadcrumbContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSBreadcrumbContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSBreadcrumbContainer>("elem", convert, arg));
	}
}
