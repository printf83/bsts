import { IAttr } from "../core/base/index.js";
import { tag } from "./index.js";

export class hr extends tag {
	constructor();
	constructor(attr: IAttr);
	constructor(...arg: any[]) {
		if (arg.length === 1) {
			super("hr", arg[0], undefined);
		} else if (arg.length === 0) {
			super("hr");
		}
	}
}
