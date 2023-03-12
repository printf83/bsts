import { IElem } from "../../../core/base/tag.js";
import { bsConstArg } from "../../../core/base/bootstrap.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";
import { IAttrTagUl, ul } from "../../../ht/ul.js";

export interface IAttrBSNavContainer extends IAttrTagUl {
	type?: "tab" | "pill";
	itemWidth?: "fill" | "justified";
	vertical?: true;
	role?: "tablist";
}

const convert = (attr: IAttrBSNavContainer): IAttrTagUl => {
	attr = mergeObject(
		{
			class: [
				"nav",
				attr.type ? `nav-${attr.type}s` : "",
				attr.itemWidth ? `nav-${attr.itemWidth}` : "",
				attr.vertical ? "flex-column" : "",
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
