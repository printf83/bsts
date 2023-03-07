import { IAttr, IElem, isAttr } from "../../core/base/tag.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { div } from "../../ht/div.js";

export interface IAttrBSProgressContainer extends IAttr {
	role?: "progressbar";
	label?: string;
	value?: number;
	min?: number;
	max?: number;
}

const convert = (attr: IAttrBSProgressContainer): IAttr => {
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
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSProgressContainer>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({}), arg[0]);
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(arg[0]), arg[1]);
		}
	}
}
