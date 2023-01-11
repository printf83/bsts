import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class b extends tag {
	constructor(public elem?: IElem, public attr?: IAttr) {
		super("b", elem, attr);
	}
}
