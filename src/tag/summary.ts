import { IAttr, IElem, tag } from "../core/attach/_index.js";

export class summary extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("summary");
		} else if (arg.length === 1) {
			super("summary", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("summary", arg[0], arg[1]);
		}
	}
}
