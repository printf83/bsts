import { IAttrColspan, IAttrHeaders, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTh extends IAttrColspan, IAttrHeaders {}

export class th extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagTh) {
		super("th", elem, attr);
	}
}
