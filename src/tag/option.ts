import { IAttrDisabled, IAttrLabel, IAttrSelected, IAttrValue, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagOption extends IAttrDisabled, IAttrLabel, IAttrSelected, IAttrValue {}

export class option extends tag {
	constructor(public attr?: IAttrTagOption, public elem?: IElem) {
		super("option", attr, elem);
	}
}
