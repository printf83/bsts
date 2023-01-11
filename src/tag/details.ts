import { IAttrOpen, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagDetails extends IAttrOpen {}

export class details extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagDetails) {
		super("details", elem, attr);
	}
}
