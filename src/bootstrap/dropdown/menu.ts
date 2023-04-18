import { IAttr, IElem } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { bsConstArg } from "../../core/bootstrap.js";

export interface IAttrBSDropdownMenu extends IAttr {
	positionView?: bootstrapType.dropdownMenuPositionView | bootstrapType.dropdownMenuPositionView[];
	dropdownMenuPositionView?: bootstrapType.dropdownMenuPositionView | bootstrapType.dropdownMenuPositionView[];
	debug?: boolean;
}

const convert = (attr: IAttrBSDropdownMenu) => {
	attr.class = mergeClass(attr.class, ["dropdown-menu", attr.debug ? "debug" : undefined]);
	attr.dropdownMenuPositionView = attr.dropdownMenuPositionView || attr.positionView;

	delete attr.positionView;
	delete attr.debug;

	return attr;
};

export class menu extends div {
	constructor(); //#1
	constructor(attr: IAttrBSDropdownMenu); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSDropdownMenu, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSDropdownMenu>("elem", convert, arg));
	}
}
