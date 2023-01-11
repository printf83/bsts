import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class strong extends tag {
	constructor(public elem?: IElem, public attr?: IAttr) {
		super("strong", elem, attr);
	}
}
