import { IAttrSpan, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagColgroup extends IAttrSpan {}

export class colgroup extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagColgroup) {
		super("colgroup", elem, attr);
	}
}
