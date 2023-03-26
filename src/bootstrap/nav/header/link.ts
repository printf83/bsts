import { IElem } from "../../../core/base/tag.js";
import { bsConstArg } from "../../../core/base/bootstrap.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";
import { a, IAttrTagA } from "../../../html/a.js";

export interface IAttrBSNavLink extends IAttrTagA {
	role?: "tab" | "button";
	active?: boolean;
	dropdown?: boolean;
}

const convert = (attr: IAttrBSNavLink) => {
	if (attr.dropdown) {
		attr.role = "button";
	}

	attr = mergeObject(
		{
			class: ["nav-link", attr.active ? "active" : undefined, attr.dropdown ? "dropdown-toggle" : undefined],
			href: attr.href || "#",
			aria: {
				current: attr.active ? "page" : undefined,
				expanded: attr.dropdown ? "false" : undefined,
			},
			data: { "bs-toggle": attr.dropdown ? "dropdown" : undefined },
		},
		attr
	);

	delete attr.active;
	delete attr.dropdown;

	return attr;
};

export class link extends a {
	constructor(); //#1
	constructor(attr: IAttrBSNavLink); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavLink, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSNavLink>("elem", convert, arg));
	}
}
