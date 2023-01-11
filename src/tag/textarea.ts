import {
	IAttrAutofocus,
	IAttrCols,
	IAttrDirname,
	IAttrDisabled,
	IAttrForm,
	IAttrMaxlength,
	IAttrName,
	IAttrPlaceholderText,
	IAttrReadonly,
	IAttrRequired,
	IAttrRows,
	IAttrWarp,
} from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTextarea
	extends IAttrAutofocus,
		IAttrCols,
		IAttrDirname,
		IAttrDisabled,
		IAttrForm,
		IAttrMaxlength,
		IAttrName,
		IAttrPlaceholderText,
		IAttrReadonly,
		IAttrRequired,
		IAttrRows,
		IAttrWarp {}

export class textarea extends tag {
	constructor(public value?: string, public attr?: IAttrTagTextarea) {
		super("textarea", value, attr);
	}
}
