import { bootstrapType, isBootstrapType } from "../core/base/bootstrap.js";
import { IAttr, IElem } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../tag/div.js";

const convert = (attr: IAttr): IAttr => {
	attr = mergeObject(attr, {
		row: true,
	});

	return attr;
};

export class col extends div {
	constructor(); //#1
	constructor(elem: IElem); //#2
	constructor(col: bootstrapType.col, elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super({ col: true }, "");
		} else if (arg.length === 1) {
			//#2
			super({ col: true }, arg[0]);
		} else if (arg.length === 2) {
			if (isBootstrapType<bootstrapType.col>(arg[0], "col")) {
				//#3
				super({ col: arg[0] }, arg[1]);
			} else {
				//#3
				super(convert(arg[0]), arg[1]);
			}
		}
	}
}
