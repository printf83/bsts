import { IAttr, IElem, tag } from "../core/base/tag.js";

export class template extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("template");
		} else if (arg.length === 1) {
			super("template", arg[0]);
		} else if (arg.length === 2) {
			super("template", arg[0], arg[1]);
		}
	}
}
