import { IAttr, IElem, tag } from "../core/base/tag.js";

export class small extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("small");
		} else if (arg.length === 1) {
			super("small", arg[0]);
		} else if (arg.length === 2) {
			super("small", arg[0], arg[1]);
		}
	}
}
