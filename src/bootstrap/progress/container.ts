import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";

export interface IBsProgressContainer extends IAttr {
	role?: "progressbar";
	value?: number;
	min?: number;
	max?: number;
}

const convert = (attr: IBsProgressContainer) => {
	attr = mergeObject(
		{
			class: "progress",
			role: attr.role || "progressbar",
			aria: {
				valuenow: attr.value,
				valuemin: attr.min,
				valuemax: attr.max,
			},
		},
		attr
	);

	delete attr.value;
	delete attr.min;
	delete attr.max;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IBsProgressContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsProgressContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsProgressContainer>("elem", convert, arg));
	}
}
