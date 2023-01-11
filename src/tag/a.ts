import {
	IAttrDownload,
	IAttrHref,
	IAttrHrefLang,
	IAttrRel,
	IAttrTarget,
	IAttrType,
	IElem,
} from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagA extends IAttrHref, IAttrHrefLang, IAttrDownload, IAttrRel, IAttrTarget, IAttrType {}

export class a extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagA, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("a");
		} else if (arg.length === 1) {
			super("a", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("a", arg[0], arg[1]);
		}
	}
}
