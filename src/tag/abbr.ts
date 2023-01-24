import { IAttr, IElem, tag } from "../core/base/tag.js";

export class abbr extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			new tag("abbr")
			super("abbr");
		} else if (arg.length === 1) {
			super("abbr", arg[0]);
		} else if (arg.length === 2) {
			super("abbr", arg[0], arg[1]);
		}
	}
}
