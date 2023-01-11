import { IAttrCite, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagIns extends IAttrCite {}

export class ins extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagIns) {
		super("ins", elem, attr);
	}
}
