import { IAttr, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export class ol extends tag {
	constructor(public elem?: IElem, public attr?: IAttr) {
		super("ol", elem, attr);
	}
}
