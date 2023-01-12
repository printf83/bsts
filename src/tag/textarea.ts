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
	constructor();
	constructor(value: string);
	constructor(attr: IAttrTagTextarea, value: string);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("textarea");
		} else if (arg.length === 1) {
			super("textarea", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("textarea", arg[0], arg[1]);
		}
	}
}
