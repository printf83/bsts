import { IAttrDisabled, IAttrForm, IAttrName, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagFieldset extends IAttrDisabled, IAttrForm, IAttrName {}

export class fieldset extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagFieldset) {
		super("fieldset", elem, attr);
	}
}
