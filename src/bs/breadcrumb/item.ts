import { IAttr, IElem } from "../../core/base/tag.js";
import { conProp } from "../../core/fn/arg.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { a } from "../../ht/a.js";
import { li } from "../../ht/li.js";

export interface IAttrBSBreadcrumbItem extends IAttr {
	active?: boolean;
	href?: string;
}

const convert = (attr: IAttrBSBreadcrumbItem): IAttr => {
	attr = mergeObject(
		{
			class: ["breadcrumb-item", attr.active ? "active" : ""],
			aria: { current: attr.active ? "page" : undefined },
		},
		attr
	);

	if (!attr.active && attr.href) {
		if (attr.elem) {
			attr.elem = new a({ href: attr.href }, attr.elem);
		} else {
			attr.elem = new a({ href: attr.href });
		}
	}

	delete attr.active;

	return attr;
};

export class item extends li {
	constructor(); //#1
	constructor(attr: IAttrBSBreadcrumbItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSBreadcrumbItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conProp<IAttrBSBreadcrumbItem>("elem", convert, arg));
	}
}
