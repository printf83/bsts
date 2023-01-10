import { baseAttr, baseElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class i extends tag {
	constructor(public elem?: baseElem, public attr?: baseAttr) {
		super("i", elem, attr);
	}
}
