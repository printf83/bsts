import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class h extends tag {
	constructor(level: 1 | 2 | 3 | 4 | 5 | 6, public elem?: IElem, public attr?: IAttr) {
		super(`h${level}`, elem, attr);
	}
}
