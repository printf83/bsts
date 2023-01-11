import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class em extends tag {
	constructor(public elem?: IElem, public attr?: IAttr) {
		super("em", elem, attr);
	}
}
