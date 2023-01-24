import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagDel extends IAttr {
	cite?: string;
	datetime?: string | Date;
}

export class del extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagDel, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("del");
		} else if (arg.length === 1) {
			super("del", arg[0]);
		} else if (arg.length === 2) {
			super("del", arg[0], arg[1]);
		}
	}
}
