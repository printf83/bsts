import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class small extends tag {
	constructor(public elem?: IElem, public attr?: IAttr) {
		super("small", elem, attr);
	}
}
