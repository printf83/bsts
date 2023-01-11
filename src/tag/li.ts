import { IAttrValue, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagLi extends IAttrValue {}

export class li extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagLi) {
		super("li", elem, attr);
	}
}
