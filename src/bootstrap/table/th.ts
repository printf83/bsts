import { IElem } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { IAttrTagTh, th as TTh } from "../../html/th.js";

export interface IAttrBSTableTh extends IAttrTagTh {
	color?: bootstrapType.color[number];
	active?: boolean;
}

const convert = (attr: IAttrBSTableTh) => {
	attr.class = mergeClass(attr.class, [
		attr.color ? `table-${attr.color}` : undefined,
		attr.active ? "table-active" : undefined,
	]);

	delete attr.color;
	delete attr.active;

	return attr;
};

export class th extends TTh {
	constructor(); //#1
	constructor(attr: IAttrBSTableTh); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSTableTh, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSTableTh>("elem", convert, arg));
	}
}
