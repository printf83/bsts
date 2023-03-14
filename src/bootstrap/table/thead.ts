import { IAttr, IElem } from "../../core/base/tag.js";
import { bootstrapType, bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { thead as TThead } from "../../html/thead.js";

export interface IAttrBSTableThead extends IAttr {
	color?: bootstrapType.color[number];
}

const convert = (attr: IAttrBSTableThead) => {
	attr.class = mergeClass(attr.class, [attr.color ? `table-${attr.color}` : undefined]);

	delete attr.color;

	return attr;
};

export class thead extends TThead {
	constructor(); //#1
	constructor(attr: IAttrBSTableThead); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSTableThead, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSTableThead>("elem", convert, arg));
	}
}
