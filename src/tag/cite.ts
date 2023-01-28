import { IAttr, IElem, tag } from "../core/base/tag.js";

export class cite extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("cite");
		} else if (arg.length === 1) {
			super("cite", arg[0]);
		} else if (arg.length === 2) {
			super("cite", arg[0], arg[1]);
		}
	}
}
