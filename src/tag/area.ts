import {
	IAttrAlt,
	IAttrCoords,
	IAttrDownload,
	IAttrHref,
	IAttrHrefLang,
	IAttrRel,
	IAttrShape,
	IAttrTarget,
	IElem,
} from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagArea
	extends IAttrAlt,
		IAttrCoords,
		IAttrDownload,
		IAttrHref,
		IAttrHrefLang,
		IAttrRel,
		IAttrShape,
		IAttrTarget {}

export class area extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagArea, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 2) {
			super("area", arg[0], arg[1]);
		} else if (arg.length === 1) {
			super("area", undefined, arg[0]);
		} else if (arg.length === 0) {
			super("area");
		}
	}
}
