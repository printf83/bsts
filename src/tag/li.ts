import { IAttrValue, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagLi extends IAttrValue {}

export class li extends tag {
	constructor(public attr?: IAttrTagLi, public elem?: IElem) {
		super("li", attr, elem);
	}
}
