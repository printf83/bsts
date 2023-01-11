import { IAttrAutofocus, IAttrDisabled, IAttrForm, IAttrMultiple, IAttrName, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagSelect extends IAttrAutofocus, IAttrDisabled, IAttrForm, IAttrMultiple, IAttrName {}

export class select extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagSelect) {
		super("select", elem, attr);
	}
}
