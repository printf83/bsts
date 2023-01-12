import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class u extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("u");
		} else if (arg.length === 1) {
			super("u", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("u", arg[0], arg[1]);
		}
	}
}
