import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { tfoot as TTfoot } from "../../html/tfoot.js";

export interface IAttrBSTableThead extends IAttr {
	color?: bootstrapType.color[number];
}

const convert = (attr: IAttrBSTableThead) => {
	attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);

	delete attr.color;

	return attr;
};

export class tfoot extends TTfoot {
	constructor(); //#1
	constructor(attr: IAttrBSTableThead); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSTableThead, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSTableThead>("elem", convert, arg));
	}
}
