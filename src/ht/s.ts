import { IAttr, IElem, tag } from "../core/base/tag.js";

export class s extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("s");
		} else if (arg.length === 1) {
			super("s", arg[0]);
		} else if (arg.length === 2) {
			super("s", arg[0], arg[1]);
		}
	}
}
