import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class u extends tag {
	constructor(public attr?: IAttr, public elem?: IElem) {
		super("u", attr, elem);
	}
}
