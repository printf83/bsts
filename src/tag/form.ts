import {
	IAttrAcceptCharset,
	IAttrAction,
	IAttrAutocomplete,
	IAttrEnctype,
	IAttrMethod,
	IAttrName,
	IAttrNovalidate,
	IAttrRel,
	IAttrTarget,
	IElem,
} from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagForm
	extends IAttrAcceptCharset,
		IAttrAction,
		IAttrAutocomplete,
		IAttrEnctype,
		IAttrMethod,
		IAttrName,
		IAttrNovalidate,
		IAttrRel,
		IAttrTarget {}

export class form extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagForm, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("form");
		} else if (arg.length === 1) {
			super("form", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("form", arg[0], arg[1]);
		}
	}
}
