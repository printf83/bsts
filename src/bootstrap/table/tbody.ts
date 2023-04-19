import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { tbody as TTbody } from "../../html/tbody.js";

export interface IBsTableTbody extends IAttr {
	divider?: boolean;
}

const convert = (attr: IBsTableTbody) => {
	attr.class = mergeClass(attr.class, [attr.divider ? "table-group-divider" : undefined]);

	delete attr.divider;

	return attr;
};

export class tbody extends TTbody {
	constructor(); //#1
	constructor(attr: IBsTableTbody); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsTableTbody, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsTableTbody>("elem", convert, arg));
	}
}
