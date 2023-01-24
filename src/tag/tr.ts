import { IAttr, IElem, tag } from "../core/base/tag.js";

export class tr extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("tr");
		} else if (arg.length === 1) {
			super("tr", arg[0]);
		} else if (arg.length === 2) {
			super("tr", arg[0], arg[1]);
		}
	}
}
