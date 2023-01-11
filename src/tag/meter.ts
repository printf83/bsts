import { IAttrForm, IAttrHigh, IAttrLow, IAttrMin, IAttrOptimum, IAttrValue, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagMeter extends IAttrForm, IAttrHigh, IAttrLow, IAttrMin, IAttrOptimum, IAttrValue {}

export class meter extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagMeter) {
		super("meter", elem, attr);
	}
}
