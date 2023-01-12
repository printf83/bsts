import { IAttrForm, IAttrHigh, IAttrLow, IAttrMin, IAttrOptimum, IAttrValue, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagMeter extends IAttrForm, IAttrHigh, IAttrLow, IAttrMin, IAttrOptimum, IAttrValue {}

export class meter extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagMeter, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("meter");
		} else if (arg.length === 1) {
			super("meter", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("meter", arg[0], arg[1]);
		}
	}
}
