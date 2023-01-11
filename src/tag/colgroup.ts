import { IAttrSpan, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagColgroup extends IAttrSpan {}

export class colgroup extends tag {
	constructor(public attr?: IAttrTagColgroup, public elem?: IElem) {
		super("colgroup", attr, elem);
	}
}
