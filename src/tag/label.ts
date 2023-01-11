import { IAttrFor, IAttrForm, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagLabel extends IAttrFor, IAttrForm {}

export class label extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagLabel) {
		super("label", elem, attr);
	}
}
