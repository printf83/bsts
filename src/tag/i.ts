import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class i extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem | undefined);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("i");
		} else if (arg.length === 1) {
			super("i", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("i", arg[0], arg[1]);
		}
	}
}
