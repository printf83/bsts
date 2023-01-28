import { IAttr, IElem, tag } from "../core/base/tag.js";

export class dfn extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("dfn");
		} else if (arg.length === 1) {
			super("dfn", arg[0]);
		} else if (arg.length === 2) {
			super("dfn", arg[0], arg[1]);
		}
	}
}
