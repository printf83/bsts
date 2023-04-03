import { IAttr, IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { nav } from "../../../html/nav.js";

export interface IAttrBSNavContainerNav extends IAttr {
	type?: "tab" | "pill" | "underline";
	itemWidth?: "fill" | "justified";
	vertical?: true;
	role?: "tablist";
}

const convert = (attr: IAttrBSNavContainerNav) => {
	attr = mergeObject(
		{
			class: [
				"nav",
				attr.type ? `nav-${attr.type}s` : undefined,
				attr.itemWidth ? `nav-${attr.itemWidth}` : undefined,
				attr.vertical ? "flex-column" : undefined,
			],
			aria: {
				orientation: attr.vertical ? "vertical" : undefined,
			},
		},
		attr
	);

	delete attr.type;
	delete attr.itemWidth;
	delete attr.vertical;

	return attr;
};

export class containerNav extends nav {
	constructor(); //#1
	constructor(attr: IAttrBSNavContainerNav); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavContainerNav, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSNavContainerNav>("elem", convert, arg));
	}
}