import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { thead as TThead } from "../../html/thead.js";

export interface IBsTableThead extends IAttr {
	color?: bootstrapType.color;
}

const convert = (attr: IBsTableThead) => {
	attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);

	delete attr.color;

	return attr;
};

export class thead extends TThead {
	constructor(); //#1
	constructor(attr: IBsTableThead); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsTableThead, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsTableThead>("elem", arg)));
	}
}
