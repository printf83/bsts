import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class u extends tag {
	constructor(public elem?: IElem, public attr?: IAttr) {
		super("u", elem, attr);
	}
}
