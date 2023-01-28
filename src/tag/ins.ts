import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagIns extends IAttr {
	cite?: string;
	datetime?: string | Date;
}

export class ins extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagIns);
	constructor(attr: IAttrTagIns, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("ins");
		} else if (arg.length === 1) {
			super("ins", arg[0]);
		} else if (arg.length === 2) {
			super("ins", arg[0], arg[1]);
		}
	}
}
