import { IElem, isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";

import { a, IAttrTagA } from "../../ht/a.js";

const convert = (attr: IAttrTagA): IAttrTagA => {
	//add alert-link
	attr.class = mergeClass(attr.class, "alert-link");
	return attr;
};

export class link extends a {
	constructor(); //#1
	constructor(attr: IAttrTagA); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagA, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}), "Link");
		} else if (arg.length === 1) {
			if (isAttr<IAttrTagA>(arg[0])) {
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
