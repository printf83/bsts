import { baseAttr, baseElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class abbr extends tag {
	constructor(public elem?: baseElem, public attr?: baseAttr) {
		super("abbr", elem, attr);
	}
}
