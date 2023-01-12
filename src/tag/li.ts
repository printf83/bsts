import { IAttrValue, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagLi extends IAttrValue {}

export class li extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagLi, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("li");
		} else if (arg.length === 1) {
			super("li", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("li", arg[0], arg[1]);
		}
	}
}
