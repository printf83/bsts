import { IAttr, IElem, isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { h } from "../../ht/h.js";

const convert = (attr: IAttr): IAttr => {
	attr.class = mergeClass(attr.class, "dropdown-header");
	return attr;
};

export class header extends h {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(6, convert({ elem: "Dropdown header" }));
		} else if (arg.length === 1) {
			if (isAttr<IAttr>(arg[0])) {
				//#2
				super(6, convert(arg[0]));
			} else {
				//#3
				super(6, convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			//#4
			super(6, convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}
}
