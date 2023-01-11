import { IAttrAutofocus, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagSelect extends IAttrAutofocus {}

export class select extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagSelect) {
		super("select", elem, attr);
	}
}
