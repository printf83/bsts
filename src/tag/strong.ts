import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class strong extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("strong");
		} else if (arg.length === 1) {
			super("strong", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("strong", arg[0], arg[1]);
		}
	}
}