import { IAttr, IElem, tag } from "../core/base/tag.js";

export class dt extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("dt");
		} else if (arg.length === 1) {
			super("dt", arg[0]);
		} else if (arg.length === 2) {
			super("dt", arg[0], arg[1]);
		}
	}
}
