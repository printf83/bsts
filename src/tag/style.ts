import { IAttrMedia, IAttrType } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagStyle extends IAttrMedia, IAttrType {}

export class style extends tag {
	constructor(public css: string, public attr?: IAttrTagStyle) {
		super("style", attr, css);
	}
}
