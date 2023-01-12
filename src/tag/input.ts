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
	constructor();
	constructor(attr: IAttrTagInput);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("input");
		} else if (arg.length === 1) {
			super("input", arg[0], undefined);
		}
	}
}
