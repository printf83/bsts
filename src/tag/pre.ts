import { IAttr, IElem, tag } from "../core/attach/_index.js";

export class pre extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("pre");
		} else if (arg.length === 1) {
			super("pre", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("pre", arg[0], arg[1]);
		}
	}
}
