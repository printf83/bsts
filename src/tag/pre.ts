import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class pre extends tag {
	constructor(public attr?: IAttr, public elem?: IElem) {
		super("pre", attr, elem);
	}
}
