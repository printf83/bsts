import { IAttrCharset, IAttrContent } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagMeta extends IAttrCharset, IAttrContent {}

export class meta extends tag {
	constructor(public attr?: IAttrTagMeta) {
		super("meta", undefined, attr);
	}
}
