import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { tbody as TTbody } from "../../html/tbody.js";

export interface IAttrBSTableTbody extends IAttr {
	divider?: boolean;
}

const convert = (attr: IAttrBSTableTbody) => {
	attr.class = mergeClass(attr.class, [attr.divider ? "table-group-divider" : undefined]);

	delete attr.divider;

	return attr;
};

export class tbody extends TTbody {
	constructor(); //#1
	constructor(attr: IAttrBSTableTbody); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSTableTbody, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSTableTbody>("elem", convert, arg));
	}
}
