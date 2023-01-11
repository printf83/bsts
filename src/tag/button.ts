import {
	IAttrAutofocus,
	IAttrDisabled,
	IAttrForm,
	IAttrFormAction,
	IAttrName,
	IAttrType,
	IAttrValue,
	IElem,
} from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagButton
	extends IAttrAutofocus,
		IAttrDisabled,
		IAttrForm,
		IAttrFormAction,
		IAttrName,
		IAttrType,
		IAttrValue {}

export class button extends tag {
	constructor(public attr?: IAttrTagButton, public elem?: IElem) {
		super("button", attr, elem);
	}
}
