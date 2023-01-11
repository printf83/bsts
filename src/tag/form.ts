import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class form extends tag {
	constructor(public elem?: IElem, public attr?: IAttr) {
		super("form", elem, attr);
	}
}
