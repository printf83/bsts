import { IAttrDataText, IAttrName, IAttrType, IAttrUsemap, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagObj extends IAttrName, IAttrDataText, IAttrType, IAttrUsemap {}

export class obj extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagObj) {
		super("object", elem, attr);
	}
}
