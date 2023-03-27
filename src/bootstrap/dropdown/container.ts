import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { btngroup } from "../btngroup.js";

export type IAttrBSDropdownContainerDrop = "down" | "down-center" | "up" | "up-center" | "start" | "end";
export interface IAttrBSDropdownContainer extends IAttr {
	drop?: IAttrBSDropdownContainerDrop;
}

const convert = (attr: IAttrBSDropdownContainer) => {
	attr.class = mergeClass(attr.class, [attr.drop ? `drop${attr.drop}` : undefined]);

	delete attr.drop;

	return attr;
};

export class container extends btngroup {
	constructor(); //#1
	constructor(attr: IAttrBSDropdownContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSDropdownContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSDropdownContainer>("elem", convert, arg));
	}
}
