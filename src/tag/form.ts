import { IAttrAcceptCharset, IAttrAction, IAttrAutocomplete, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagInput extends IAttrAcceptCharset, IAttrAction, IAttrAutocomplete {}

export class form extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagInput) {
		super("form", elem, attr);
	}
}
