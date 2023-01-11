import { IAttrDatetime, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTime extends IAttrDatetime {}

export class time extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagTime) {
		super("time", elem, attr);
	}
}
