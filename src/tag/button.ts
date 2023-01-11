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
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagButton, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("button");
		} else if (arg.length === 1) {
			super("button", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("button", arg[0], arg[1]);
		}
	}
}
