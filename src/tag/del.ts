import { IAttrCite, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagDel extends IAttrCite {}

export class del extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagDel) {
		super("del", elem, attr);
	}
}
