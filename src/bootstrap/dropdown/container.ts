import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { btngroup } from "../btngroup.js";

export type IBsDropdownContainerDrop = "down" | "down-center" | "up" | "up-center" | "start" | "end";
export interface IBsDropdownContainer extends IAttr {
	drop?: IBsDropdownContainerDrop;
}

const convert = (attr: IBsDropdownContainer) => {
	attr.class = mergeClass(attr.class, [attr.drop ? `drop${attr.drop}` : undefined]);

	delete attr.drop;

	return attr;
};

export class container extends btngroup {
	constructor(); //#1
	constructor(attr: IBsDropdownContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsDropdownContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsDropdownContainer>("elem", arg)));
	}
}

export const Container = (AttrOrElem?: IBsDropdownContainer | IElem, Elem?: IElem) =>
	genTagClass<container, IBsDropdownContainer>(container, AttrOrElem, Elem);
