import { IAttr, IElem, tag } from "../core/attach/_index.js";

export class b extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("b");
		} else if (arg.length === 1) {
			super("b", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("b", arg[0], arg[1]);
		}
	}
}
