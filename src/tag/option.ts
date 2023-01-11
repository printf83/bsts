import { IAttrDisabled, IAttrLabel, IAttrSelected, IAttrValue, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagOption extends IAttrDisabled, IAttrLabel, IAttrSelected, IAttrValue {}

export class option extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagOption) {
		super("option", elem, attr);
	}
}
