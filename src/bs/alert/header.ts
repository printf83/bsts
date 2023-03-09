import { IAttr, IElem, isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { mergeObject } from "../../core/fn/mergeObject.js";

import { h, HLevel } from "../../ht/h.js";

const convert = (attr: IAttr): IAttr => {
	//add alert-header
	attr.class = mergeClass(attr.class, "alert-header");
	return attr;
};

export class header extends h {
	constructor(); //#1
	constructor(level: HLevel); //#2
	constructor(level: HLevel, attr: IAttr); //#3
	constructor(level: HLevel, elem: IElem); //#4
	constructor(level: HLevel, attr: IAttr, elem: IElem); //#5
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(4, convert({}), "Header");
		} else if (arg.length === 1) {
			//#2
			super(arg[0] as HLevel, convert({}));
		} else if (arg.length === 2) {
			if (isAttr<IAttr>(arg[1])) {
				//#2
				super(arg[0] as HLevel, convert(arg[1]));
			} else {
				//#3
				super(arg[0] as HLevel, convert({ elem: arg[1] }));
			}
		} else if (arg.length === 3) {
			//#4
			super(
				arg[0] as HLevel,
				convert(mergeObject({ elem: arg[1] }, arg[0]))
			);
		}
	}
}
