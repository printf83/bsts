import { IAttrCite, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagBlockquote extends IAttrCite {}

export class blockquote extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagBlockquote) {
		super("blockquote", elem, attr);
	}
}
