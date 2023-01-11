import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class h extends tag {
	constructor(level: 1 | 2 | 3 | 4 | 5 | 6, public attr?: IAttr, public elem?: IElem) {
		super(`h${level}`, attr, elem);
	}
}
