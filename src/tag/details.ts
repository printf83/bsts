import { IAttrOpen, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagDetails extends IAttrOpen {}

export class details extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagDetails, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("details");
		} else if (arg.length === 1) {
			super("details", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("details", arg[0], arg[1]);
		}
	}
}
