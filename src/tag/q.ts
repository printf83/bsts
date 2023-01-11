import { IAttrCite, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagQ extends IAttrCite {}

export class q extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagQ) {
		super("q", elem, attr);
	}
}
