import { IAttrCite, IAttrDatetime, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagIns extends IAttrCite, IAttrDatetime {}

export class ins extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagIns, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("ins");
		} else if (arg.length === 1) {
			super("ins", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("ins", arg[0], arg[1]);
		}
	}
}