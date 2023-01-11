import { IAttrCite, IAttrDatetime, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagDel extends IAttrCite, IAttrDatetime {}

export class del extends tag {
	constructor(public attr?: IAttrTagDel, public elem?: IElem) {
		super("del", attr, elem);
	}
}
