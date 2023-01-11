import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class small extends tag {
	constructor(public attr?: IAttr, public elem?: IElem) {
		super("small", attr, elem);
	}
}
