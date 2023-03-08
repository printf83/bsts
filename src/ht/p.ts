import { IAttr, IElem, isAttr, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";

export interface IAttrTagP extends IAttr {
	lead?: boolean;
}

const convert = (attr: IAttrTagP): IAttr => {
	attr.class = mergeClass(attr.class, attr.lead ? "lead" : "");
	delete attr.lead;
	return attr;
};

export class p extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagP);
	constructor(attr: IAttrTagP, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("p", convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrTagP>(arg[0])) {
				super("p", convert(arg[0]));
			} else {
				super("p", convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			super("p", mergeObject({ elem: arg[1] }, arg[0]));
		}
	}
}
