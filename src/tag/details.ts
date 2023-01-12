import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagDetails extends IAttr {
	open?: boolean;
}

export class details extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagDetails, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("details");
		} else if (arg.length === 1) {
			super("details", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("details", arg[0], arg[1]);
		}
	}
}
