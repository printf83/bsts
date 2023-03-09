import { IAttr, tag } from "../core/base/tag.js";

export class hr extends tag {
	constructor();
	constructor(attr: IAttr);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("hr");
		} else if (arg.length === 1) {
			super("hr", arg[0]);
		}
	}
}
