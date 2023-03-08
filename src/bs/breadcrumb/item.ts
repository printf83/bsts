import { IAttr, IElem, isAttr } from "../../core/base/tag.js";
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
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSBreadcrumbItem>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}
}
