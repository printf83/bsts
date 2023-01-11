import { IAttrColspan, IAttrHeaders, IAttrRowspan, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTd extends IAttrColspan, IAttrHeaders, IAttrRowspan {}

export class td extends tag {
	constructor(public attr?: IAttrTagTd, public elem?: IElem) {
		super("td", attr, elem);
	}
}
