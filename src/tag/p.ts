import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class p extends tag {
	constructor(public attr?: IAttr, public elem?: IElem) {
		super("p", attr, elem);
	}
}
