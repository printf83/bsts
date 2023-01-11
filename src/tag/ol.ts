import { IAttrReversed, IAttrStartValue, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagOl extends IAttrReversed, IAttrStartValue {}

export class ol extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagOl) {
		super("ol", elem, attr);
	}
}
