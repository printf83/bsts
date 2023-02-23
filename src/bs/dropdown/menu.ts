import { isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { IAttrTagUl, ul } from "../../ht/ul.js";
import { divider } from "./divider.js";
import { item } from "./item.js";

export type IAttrBSDropdownMenuElem = item | divider | (item | divider)[];

export interface IAttrBSDropdownMenu extends IAttrTagUl {
	elem?: IAttrBSDropdownMenuElem;
}

const convert = (attr: IAttrBSDropdownMenu): IAttrBSDropdownMenu => {
	attr.class = mergeClass(attr.class, "dropdown-menu");
	return attr;
};

export class menu extends ul {
	constructor(); //#1
	constructor(attr: IAttrBSDropdownMenu); //#2
	constructor(elem: IAttrBSDropdownMenuElem); //#3
	constructor(attr: IAttrBSDropdownMenu, elem: IAttrBSDropdownMenuElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSDropdownMenu>(arg[0])) {
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
