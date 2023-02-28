import { IElem, isAttr } from "../../../core/base/tag.js";
import { mergeClass } from "../../../core/fn/mergeClass.js";
import { IAttrTagLi, li } from "../../../ht/li.js";

const convert = (attr: IAttrTagLi): IAttrTagLi => {
	attr.class = mergeClass(attr.class, "list-group-item");
	return attr;
};

export class item extends li {
	constructor(); //#1
	constructor(attr: IAttrTagLi); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagLi, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrTagLi>(arg[0])) {
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
