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
	constructor(public attr?: IAttrTagA, public elem?: IElem) {
		super("a", attr, elem);
	}
}
