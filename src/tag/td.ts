import { IAttrColspan, IAttrHeaders, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTd extends IAttrColspan, IAttrHeaders {}

export class td extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagTd) {
		super("td", elem, attr);
	}
}
