import { IAttrReversed, IAttrStartValue, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagOl extends IAttrReversed, IAttrStartValue {}

export class ol extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagOl, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("ol");
		} else if (arg.length === 1) {
			super("ol", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("ol", arg[0], arg[1]);
		}
	}
}
