import { IAttr, IElem, isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { UUID } from "../../core/fn/uuid.js";
import { h } from "../../ht/h.js";

const convert = (attr: IAttr): IAttr => {
	attr.id = attr.id || UUID();
	attr.class = mergeClass(attr.class, "modal-title");
	return attr;
};

export class title extends h {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(5, convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttr>(arg[0])) {
				//#2
				super(5, convert(arg[0]));
			} else {
				//#3
				super(5, convert({}), arg[0]);
			}
		} else if (arg.length === 2) {
			//#4
			super(5, convert(arg[0]), arg[1]);
		}
	}
}
