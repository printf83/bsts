import { IElem, genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { ITagUl, ul } from "../../../html/ul.js";
import { IBsNavItem, item } from "./item.js";

export interface IBsNavContainer extends Omit<ITagUl, "item"> {
	type?: "tab" | "pill" | "underline";
	itemWidth?: "fill" | "justified";
	vertical?: true;
	role?: "tablist";
	item?: IBsNavItem | IBsNavItem[];
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

	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new item(i);
		});
	}

	delete attr.item;
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
