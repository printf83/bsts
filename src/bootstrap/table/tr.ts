import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { tr as TTr } from "../../html/tr.js";

export interface IBsTableTr extends IAttr {
	color?: bootstrapType.color;
	active?: boolean;
}

const convert = (attr: IBsTableTr) => {
	attr.class = mergeClass(attr.class, [
		attr.color ? `table-${attr.color}` : undefined,
		attr.active ? "table-active" : undefined,
	]);

	delete attr.color;
	delete attr.active;

	return attr;
};

export class tr extends TTr {
	constructor(); //#1
	constructor(attr: IBsTableTr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsTableTr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsTableTr>("elem", convert, arg));
	}
}
