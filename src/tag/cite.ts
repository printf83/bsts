import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class cite extends tag {
	constructor(public elem?: IElem, public attr?: IAttr) {
		super("cite", elem, attr);
	}
}
