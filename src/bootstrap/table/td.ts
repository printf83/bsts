import { IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { ITagTd, td as TTd } from "../../html/td.js";

export interface IBsTableTd extends ITagTd {
	color?: bootstrapType.color;
	active?: boolean;
}

const convert = (attr: IBsTableTd) => {
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
	constructor(attr: IBsTableTd); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsTableTd, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsTableTd>("elem", convert, arg));
	}
}
