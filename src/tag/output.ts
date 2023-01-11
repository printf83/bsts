import { IAttrFor, IAttrForm, IAttrName, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagOutput extends IAttrFor, IAttrForm, IAttrName {}

export class output extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagOutput) {
		super("output", elem, attr);
	}
}
