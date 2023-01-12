import { IAttr, IElem, tag } from "../core/attach/_index.js";

export class ul extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("ul");
		} else if (arg.length === 1) {
			super("ul", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("ul", arg[0], arg[1]);
		}
	}
}
