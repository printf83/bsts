import { IAttr, IElem, isAttr } from "../../../core/base/tag.js";
import { mergeClass } from "../../../core/fn/mergeClass.js";
import { IAttrTagUl, IElemTagUl, ul } from "../../../ht/ul.js";

const convert = (attr: IAttrTagUl): IAttrTagUl => {
	attr.class = mergeClass(attr.class, "list-group");
	return attr;
};

export class group extends ul {
	constructor(); //#1
	constructor(attr: IAttrTagUl); //#2
	constructor(elem: IElemTagUl); //#3
	constructor(attr: IAttrTagUl, elem: IElemTagUl); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttr>(arg[0])) {
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
