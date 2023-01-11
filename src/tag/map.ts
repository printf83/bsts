import { IAttrName, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagMap extends IAttrName {}

export class map extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagMap) {
		super("map", elem, attr);
	}
}
