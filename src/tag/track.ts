import { IAttrDefault, IAttrKind, IAttrLabel, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTrack extends IAttrDefault, IAttrKind, IAttrLabel {}

export class track extends tag {
	constructor(public elem?: IElem, public attr?: IAttrTagTrack) {
		super("track", elem, attr);
	}
}
