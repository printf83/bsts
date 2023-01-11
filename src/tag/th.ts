import { IAttrColspan, IAttrHeaders, IAttrRowspan, IAttrScope, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTh extends IAttrColspan, IAttrHeaders, IAttrRowspan, IAttrScope {}

export class th extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagTh) {
		super("th", elem, attr);
	}
}
