import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class li extends tag {
	constructor(public elem?: IElem, public attr?: IAttr) {
		super("li", elem, attr);
	}
}
