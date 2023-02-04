import { IAttr, IElem, tag } from "../core/base/tag.js";

export class figcaption extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("figcaption");
		} else if (arg.length === 1) {
			super("figcaption", arg[0]);
		} else if (arg.length === 2) {
			super("figcaption", arg[0], arg[1]);
		}
	}
}
