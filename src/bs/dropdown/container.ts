import { IAttr, IElem, isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { btngroup } from "../btngroup.js";
import { button } from "../button.js";
import { menu } from "./menu.js";
import { toggle } from "./toggle.js";

export interface IAttrBSDropdownContainer extends IAttr {
	drop?: "down" | "up" | "start" | "end";
	center?: true;
	elem?: button | toggle | menu | (button | toggle | menu)[];
}

const convert = (attr: IAttrBSDropdownContainer): IAttr => {
	attr.class = mergeClass(attr.class, [
		attr.drop && attr.drop !== "down" ? `drop${attr.drop}` : "",
		attr.center && attr.drop !== "start" && attr.drop !== "end"
			? `drop${attr.drop}-center`
			: "",
	]);

	delete attr.drop;
	delete attr.center;

	return attr;
};

export class container extends btngroup {
	constructor(); //#1
	constructor(attr: IAttrBSDropdownContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSDropdownContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({ elem: new toggle("Dropdown item") }));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSDropdownContainer>(arg[0])) {
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
