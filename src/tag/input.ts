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
import { mergeObject } from "../core/fn/mergeObject.js";
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
	constructor(public type: string, public attr?: IAttrTagInput) {
		if (typeof attr !== "undefined") {
			attr = mergeObject(attr, { type: type });
		} else {
			attr = { type: type };
		}

		super("input", attr);
	}
}
