import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { tr as TTr } from "../../html/tr.js";

export interface IAttrBSTableTr extends IAttr {
	color?: bootstrapType.color[number];
	active?: boolean;
}

const convert = (attr: IAttrBSTableTr) => {
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
	constructor(attr: IAttrBSTableTr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSTableTr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSTableTr>("elem", convert, arg));
	}
}
