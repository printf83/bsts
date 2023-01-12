import { IAttr, IElem, tag } from "../core/base/tag.js";

export class i extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("i");
		} else if (arg.length === 1) {
			super("i", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("i", arg[0], arg[1]);
		}
	}
}
