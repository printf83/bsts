import { baseAttr, baseElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class h extends tag {
	constructor(level: 1 | 2 | 3 | 4 | 5 | 6, public elem?: baseElem, public attr?: baseAttr) {
		super(`h${level}`, elem, attr);
	}
}
