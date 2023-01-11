import { IAttrCite, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagQ extends IAttrCite {}

export class q extends tag {
	constructor(public attr?: IAttrTagQ, public elem?: IElem) {
		super("q", attr, elem);
	}
}
