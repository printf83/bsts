import { IAttr, IElem } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../tag/div.js";

const convert = (attr: IAttr): IAttr => {
	attr = mergeObject(
		{
			display: "grid",
			gap: 3,
		},
		attr
	);

	return attr;
};

export class grid extends div {
	constructor(); //#1
	constructor(elem: IElem); //#2
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}), "");
		} else if (arg.length === 1) {
			//#2
			super(convert({}), arg[0]);
		} else if (arg.length === 2) {
			//#3
			super(convert(arg[0]), arg[1]);
		}
	}
}
