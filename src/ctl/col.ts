import { bootstrapBase, bootstrapType, isBootstrapType } from "../core/base/bootstrap.js";
import { IAttr, IElem } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../tag/div.js";

const convert = (attr: IAttr): IAttr => {
	attr = mergeObject(attr, {
		col: true,
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
			super(convert({}), "");
		} else if (arg.length === 1) {
			//#2
			super(convert({}), arg[0]);
		} else if (arg.length === 2) {
			if (isBootstrapType(arg[0], bootstrapBase.col.concat())) {
				//#3
				super(convert({ col: arg[0] }), arg[1]);
			} else {
				//#4
				super(convert(arg[0]), arg[1]);
			}
		}
	}
}
