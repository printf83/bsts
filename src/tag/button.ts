import { IAttrAutofocus, IAttrDisabled, IAttrForm, IAttrFormAction, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagButton extends IAttrAutofocus, IAttrDisabled, IAttrForm, IAttrFormAction {}

export class button extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagButton) {
		super("button", elem, attr);
	}
}
