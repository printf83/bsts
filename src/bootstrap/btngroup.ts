import { IAttr, IElem } from "../core/base/tag.js";
import { bsConstArg } from "../core/base/bootstrap.js";
import { div } from "../html/div.js";
import { mergeObject } from "../core/fn/mergeObject.js";

export interface IAttrBSBtngroup extends IAttr {
	role?: "group" | "toolbar";
	weight?: "sm" | "lg";
	vertical?: boolean;
}
const convert = (attr: IAttrBSBtngroup) => {
	attr = mergeObject(
		{
			class: [
				attr.vertical ? "btn-group-vertical" : "btn-group",
				attr.weight ? `btn-group-${attr.weight}` : undefined,
			],
			role: attr.role,
		},
		attr
	);
	delete attr.role;
	delete attr.weight;
	delete attr.vertical;

	return attr;
};

export class btngroup extends div {
	constructor(); //#1
	constructor(attr: IAttrBSBtngroup); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSBtngroup, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSBtngroup>("elem", convert, arg));
	}
}
