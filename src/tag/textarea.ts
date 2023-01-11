import {
	IAttrAutofocus,
	IAttrCols,
	IAttrDirname,
	IAttrDisabled,
	IAttrForm,
	IAttrMaxlength,
	IAttrName,
} from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTextarea
	extends IAttrAutofocus,
		IAttrCols,
		IAttrDirname,
		IAttrDisabled,
		IAttrForm,
		IAttrMaxlength,
		IAttrName {}

export class textarea extends tag {
	constructor(public value?: string, public attr?: IAttrTagTextarea) {
		super("textarea", value, attr);
	}
}
