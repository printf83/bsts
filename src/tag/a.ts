import { IAttrDownload, IAttrHref, IAttrHrefLang, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagA extends IAttrHref, IAttrHrefLang, IAttrDownload {}

export class a extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagA) {
		super("a", elem, attr);
	}
}
