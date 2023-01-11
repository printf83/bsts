import { IAttrDefault, IAttrKind, IAttrLabel, IAttrSrc, IAttrSrclang, IElem } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTrack extends IAttrDefault, IAttrKind, IAttrLabel, IAttrSrc, IAttrSrclang {}

export class track extends tag {
	constructor(public attr?: IAttrTagTrack, public elem?: IElem) {
		super("track", attr, elem);
	}
}
