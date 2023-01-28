import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagData extends IAttr {
	value?: string;
}

export class data extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagData);
	constructor(attr: IAttrTagData, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("data");
		} else if (arg.length === 1) {
			super("data", arg[0]);
		} else if (arg.length === 2) {
			super("data", arg[0], arg[1]);
		}
	}
}
