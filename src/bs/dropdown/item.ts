import { IElem, isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { a, IAttrTagA } from "../../ht/a.js";
import { IAttrTagLi, li } from "../../ht/li.js";

const convert = (attr: IAttrTagA): IAttrTagLi => {
	attr.class = mergeClass(attr.class, "dropdown-item");

	//return as li attr
	return {
		elem: new a(attr),
	};
};

export class item extends li {
	constructor(); //#1
	constructor(attr: IAttrTagA); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagA, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({ elem: "Dropdown item" }));
		} else if (arg.length === 1) {
			if (isAttr<IAttrTagA>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}
}
