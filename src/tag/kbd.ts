import { IAttr, IElem, tag } from "../core/base/tag.js";

export class kbd extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("kbd");
		} else if (arg.length === 1) {
			super("kbd", arg[0]);
		} else if (arg.length === 2) {
			super("kbd", arg[0], arg[1]);
		}
	}
}
