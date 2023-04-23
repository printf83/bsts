import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";

export interface IBsDropdownMenu extends IAttr {
	dynamicPosition?: false;
	positionView?: bootstrapType.dropdownMenuPositionView | bootstrapType.dropdownMenuPositionView[];
	dropdownMenuPositionView?: bootstrapType.dropdownMenuPositionView | bootstrapType.dropdownMenuPositionView[];
	debug?: boolean;
}

const convert = (attr: IBsDropdownMenu) => {
	attr = mergeObject(
		{
			class: ["dropdown-menu", attr.debug ? "debug" : undefined],
			data: { "bs-display": attr.dynamicPosition === false ? "static" : undefined },
		},
		attr
	);
	attr.dropdownMenuPositionView = attr.dropdownMenuPositionView || attr.positionView;

	delete attr.dynamicPosition;
	delete attr.positionView;
	delete attr.debug;

	return attr;
};

export class menu extends div {
	constructor(); //#1
	constructor(attr: IBsDropdownMenu); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsDropdownMenu, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsDropdownMenu>("elem", arg)));
	}
}

export const Menu = (AttrOrElem?: IBsDropdownMenu | IElem, Elem?: IElem) =>
	genTagClass<menu, IBsDropdownMenu>(menu, AttrOrElem, Elem);
