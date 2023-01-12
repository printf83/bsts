import { IAttr, IElem, tag } from "../core/base/tag.js";

export class footer extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("footer");
		} else if (arg.length === 1) {
			super("footer", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("footer", arg[0], arg[1]);
		}
	}
}
