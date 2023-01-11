import { IAttrAlt, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagArea extends IAttrAlt {}

export class area extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagArea) {
		super("area", elem, attr);
	}
}
