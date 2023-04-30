import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { a } from "../../html/a.js";
import { li } from "../../html/li.js";

export interface Item extends IAttr {
	active?: boolean;
	href?: string;
}

const convert = (attr: Item) => {
	attr = mergeObject(
		{
			class: ["breadcrumb-item", attr.active ? "active" : undefined],
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
	constructor(attr: Item); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Item, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Item>("elem", arg)));
	}
}

export const Item = (AttrOrElem?: Item | IElem, Elem?: IElem) => genTagClass<item, Item>(item, AttrOrElem, Elem);
