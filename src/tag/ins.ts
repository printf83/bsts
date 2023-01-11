import { IAttrCite, IAttrDatetime, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagIns extends IAttrCite, IAttrDatetime {}

export class ins extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagIns) {
		super("ins", elem, attr);
	}
}
