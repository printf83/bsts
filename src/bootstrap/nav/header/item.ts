import { IElem, genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { ITagLi, li } from "../../../html/li.js";
import { IBsNavButton, button } from "./button.js";
import { IBsNavLink, link } from "./link.js";

export interface IBsNavItem extends ITagLi {
	role?: "presentation";
	dropdown?: boolean;

	link?: IBsNavLink;
	button?: IBsNavButton;
}

const convert = (attr: IBsNavItem) => {
	attr.class = mergeClass(attr.class, ["nav-item", attr.dropdown ? "dropdown" : undefined]);

	if (attr.link && !attr.button && !attr.elem) {
		attr.elem = new link(attr.link);
	} else if (!attr.link && attr.button && !attr.elem) {
		attr.elem = new button(attr.button);
	}

	delete attr.dropdown;
	delete attr.link;
	delete attr.button;

	return attr;
};

export class item extends li {
	constructor(); //#1
	constructor(attr: IBsNavItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsNavItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsNavItem>("elem", arg)));
	}
}

export const Item = (AttrOrElem?: IBsNavItem | IElem, Elem?: IElem) =>
	genTagClass<item, IBsNavItem>(item, AttrOrElem, Elem);
