import { IAttr, IElem, tag } from "../core/base/tag.js";

export class code extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("code");
		} else if (arg.length === 1) {
			super("code", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("code", arg[0], arg[1]);
		}
	}
}
