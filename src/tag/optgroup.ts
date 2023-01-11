import { IAttrDisabled, IAttrLabel, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagOptgroup extends IAttrDisabled, IAttrLabel {}

export class optgroup extends tag {
	constructor(public attr?: IAttrTagOptgroup, public elem?: IElem) {
		super("optgroup", attr, elem);
	}
}
