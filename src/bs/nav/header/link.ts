import { IElem, isAttr } from "../../../core/base/tag.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";
import { a, IAttrTagA } from "../../../ht/a.js";

export interface IAttrBSNavLink extends IAttrTagA {
	role?: "tab";
	active?: boolean;
	disabled?: boolean;
}

const convert = (attr: IAttrBSNavLink): IAttrTagA => {
	attr = mergeObject(
		{
			class: [
				"nav-link",
				attr.active ? "active" : "",
				attr.disabled ? "disabled" : "",
			],
			href: attr.href || "#",
			aria: { current: attr.active ? "page" : undefined },
		},
		attr
	);

	delete attr.active;
	delete attr.disabled;

	return attr;
};

export class link extends a {
	constructor(); //#1
	constructor(attr: IAttrBSNavLink); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavLink, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({ elem: "Dropdown item" }));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSNavLink>(arg[0])) {
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
