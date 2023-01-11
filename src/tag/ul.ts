import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class ul extends tag {
	constructor(public elem?: IElem, public attr?: IAttr) {
		super("ul", elem, attr);
	}
}
