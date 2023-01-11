import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "../tag/index.js";

export class a extends tag {
	constructor(public elem?: IElem, public attr?: IAttr) {
		super("a", attr, elem);
	}
}
