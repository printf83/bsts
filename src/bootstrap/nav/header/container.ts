import { IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { IAttrTagUl, ul } from "../../../html/ul.js";

export interface IAttrBSNavContainer extends IAttrTagUl {
	type?: "tab" | "pill" | "underline";
	itemWidth?: "fill" | "justified";
	vertical?: true;
	role?: "tablist";
}

const convert = (attr: IAttrBSNavContainer) => {
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

	delete attr.type;
	delete attr.itemWidth;
	delete attr.vertical;

	return attr;
};

export class container extends ul {
	constructor(); //#1
	constructor(attr: IAttrBSNavContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSNavContainer>("elem", convert, arg));
	}
}
