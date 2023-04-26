import { IElem, genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { ITagUl, ul } from "../../../html/ul.js";
import { IBsNavItem, item } from "./item.js";
import { IBsNavLink, link } from "./link.js";
import { IBsNavButton, button } from "./button.js";

export interface IBsNavContainer extends Omit<ITagUl, "item"> {
	type?: "tab" | "pill" | "underline";
	itemWidth?: "fill" | "justified";
	vertical?: true;
	role?: "tablist";
	item?: IBsNavItem | IBsNavItem[];
	link?: IBsNavLink | IBsNavLink[];
	button?: IBsNavButton | IBsNavButton[];
}

const convert = (attr: IBsNavContainer): ITagUl => {
	attr = mergeObject(
		{
			class: [
				"nav",
				attr.type ? `nav-${attr.type}${attr.type !== "underline" ? "s" : ""}` : undefined,
				attr.itemWidth ? `nav-${attr.itemWidth}` : undefined,
				attr.vertical ? "flex-column" : undefined,
			],
			aria: {
				orientation: attr.vertical ? "vertical" : undefined,
			},
		},
		attr
	);

	if (attr.item && !attr.link && !attr.button && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new item(i);
		});
	} else if (!attr.item && attr.link && !attr.button && !attr.elem) {
		if (!Array.isArray(attr.link)) {
			attr.link = [attr.link];
		}

		attr.elem = attr.link.map((i) => {
			return new item(new link(i));
		});
	} else if (!attr.item && !attr.link && attr.button && !attr.elem) {
		if (!Array.isArray(attr.button)) {
			attr.button = [attr.button];
		}

		attr.elem = attr.button.map((i) => {
			return new item(new button(i));
		});
	}

	delete attr.item;
	delete attr.link;
	delete attr.button;
	delete attr.type;
	delete attr.itemWidth;
	delete attr.vertical;

	return attr as ITagUl;
};

export class container extends ul {
	constructor(); //#1
	constructor(attr: IBsNavContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsNavContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsNavContainer>("elem", arg)));
	}
}

export const Container = (AttrOrElem?: IBsNavContainer | IElem, Elem?: IElem) =>
	genTagClass<container, IBsNavContainer>(container, AttrOrElem, Elem);
