import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class legend extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("legend");
		} else if (arg.length === 1) {
			super("legend", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("legend", arg[0], arg[1]);
		}
	}
}
