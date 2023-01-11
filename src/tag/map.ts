import { IAttrName, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagMap extends IAttrName {}

export class map extends tag {
	constructor(public attr?: IAttrTagMap, public elem?: IElem) {
		super("map", attr, elem);
	}
}
