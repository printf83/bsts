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
	constructor(public elem?: IElem, public attr?: IAttrTagArea) {
		super("area", elem, attr);
	}
}
