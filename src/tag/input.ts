import {
	IAttrAccept,
	IAttrAlt,
	IAttrAutocomplete,
	IAttrChecked,
	IAttrDirname,
	IAttrDisabled,
	IAttrForm,
	IAttrFormAction,
	IAttrList,
	IAttrMaxlength,
	IAttrMin,
	IAttrMultiple,
	IAttrName,
	IAttrPattern,
	IAttrPlaceholderText,
	IAttrReadonly,
	IAttrRequired,
	IAttrSize,
	IAttrSrc,
	IAttrStep,
	IAttrType,
	IAttrValue,
	IElem,
} from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagInput
	extends IAttrAccept,
		IAttrAlt,
		IAttrAutocomplete,
		IAttrChecked,
		IAttrDirname,
		IAttrDisabled,
		IAttrForm,
		IAttrFormAction,
		IAttrList,
		IAttrMaxlength,
		IAttrMin,
		IAttrMultiple,
		IAttrName,
		IAttrPattern,
		IAttrPlaceholderText,
		IAttrReadonly,
		IAttrRequired,
		IAttrSize,
		IAttrSrc,
		IAttrStep,
		IAttrType,
		IAttrValue {}

export class input extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagInput) {
		super("input", elem, attr);
	}
}
