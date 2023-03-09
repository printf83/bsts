import { IAttr, IElem } from "../../core/base/tag.js";
import { conElem } from "../../core/fn/arg.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { btngroup } from "../btngroup.js";

export interface IAttrBSDropdownContainer extends IAttr {
	drop?: "down" | "up" | "start" | "end";
	center?: true;
}

const convert = (attr: IAttrBSDropdownContainer): IAttr => {
	attr.class = mergeClass(attr.class, [
		attr.drop && attr.drop !== "down" ? `drop${attr.drop}` : "",
		attr.center && attr.drop !== "start" && attr.drop !== "end" ? `drop${attr.drop}-center` : "",
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
		super(conElem<IAttrBSDropdownContainer>(convert, arg));
	}
}
