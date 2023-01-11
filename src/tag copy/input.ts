import { IAttrAccept, IElem } from "../core/base/index.js";
import { tag } from "../tag/index.js";

export interface IAttrTagInput extends IAttrAccept {}

export class input extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagInput) {
		super("input", elem, attr);
	}
}
