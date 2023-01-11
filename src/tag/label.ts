import { IAttrFor, IAttrForm, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagLabel extends IAttrFor, IAttrForm {}

export class label extends tag {
	constructor(public attr?: IAttrTagLabel, public elem?: IElem) {
		super("label", attr, elem);
	}
}
