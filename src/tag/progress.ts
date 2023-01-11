import { IAttrMax, IAttrValue, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagProgress extends IAttrMax, IAttrValue {}

export class progress extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagProgress) {
		super("progress", elem, attr);
	}
}
