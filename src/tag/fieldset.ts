import { IAttrDisabled, IAttrForm, IAttrName, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagFieldset extends IAttrDisabled, IAttrForm, IAttrName {}

export class fieldset extends tag {
	constructor(public attr?: IAttrTagFieldset, public elem?: IElem) {
		super("fieldset", attr, elem);
	}
}
