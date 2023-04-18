import { IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { IAttrTagTd, td as TTd } from "../../html/td.js";

export interface IAttrBSTableTd extends IAttrTagTd {
	color?: bootstrapType.color;
	active?: boolean;
}

const convert = (attr: IAttrBSTableTd) => {
	attr.class = mergeClass(attr.class, [
		attr.color ? `table-${attr.color}` : undefined,
		attr.active ? "table-active" : undefined,
	]);

	delete attr.color;
	delete attr.active;

	return attr;
};

export class td extends TTd {
	constructor(); //#1
	constructor(attr: IAttrBSTableTd); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSTableTd, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSTableTd>("elem", convert, arg));
	}
}
