import { IAttr, IElem, isAttr } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { span } from "../ht/span.js";

const convert = (attr: IAttr): IAttr => {
	attr.class = mergeClass(attr.class, "visually-hidden");
	return attr;
};

export class visuallyhidden extends span {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
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
