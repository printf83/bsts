import { IAttrAcceptCharset, IAttrAction, IElem } from "../core/base/index.js";
import { tag } from "../tag/index.js";

export interface IAttrTagInput extends IAttrAcceptCharset, IAttrAction {}

export class form extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagInput) {
		super("form", elem, attr);
	}
}
