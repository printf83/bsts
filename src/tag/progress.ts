import { IAttrMax, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagProgress extends IAttrMax {}

export class progress extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagProgress) {
		super("progress", elem, attr);
	}
}
