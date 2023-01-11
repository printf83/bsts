import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class abbr extends tag {
	constructor(public elem?: IElem, public attr?: IAttr) {
		super("abbr", elem, attr);
	}
}
