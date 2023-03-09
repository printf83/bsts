import { cons, IAttr, IElem, tag } from "../core/base/tag.js";

export class mark extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("mark");
		} else if (arg.length === 1) {
			super("mark", arg[0]);
		} else if (arg.length === 2) {
			super("mark", arg[0], arg[1]);
		}
	}
}
