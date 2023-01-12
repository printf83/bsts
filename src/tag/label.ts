import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagLabel extends IAttr {
	for?: string;
	form?: string;
}

export class label extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagLabel, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("label");
		} else if (arg.length === 1) {
			super("label", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("label", arg[0], arg[1]);
		}
	}
}
