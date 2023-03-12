import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { div } from "../../html/div.js";

export interface IAttrBSProgressContainer extends IAttr {
	role?: "progressbar";
	label?: string;
	value?: number;
	min?: number;
	max?: number;
}

const convert = (attr: IAttrBSProgressContainer) => {
	attr = mergeObject(
		{
			class: "progress",
			role: attr.role || "progressbar",
			aria: {
				label: attr.label,
				valuenow: attr.value,
				valuemin: attr.min,
				valuemax: attr.max,
			},
		},
		attr
	);

	delete attr.label;
	delete attr.value;
	delete attr.min;
	delete attr.max;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSProgressContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSProgressContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSProgressContainer>("elem", convert, arg));
	}
}
