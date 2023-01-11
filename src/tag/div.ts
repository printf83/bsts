import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class div extends tag {
	constructor(public elem?: IElem, public attr?: IAttr) {
		super("div", elem, attr);
	}
}
