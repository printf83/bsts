import { IAttrMedia, IAttrSrc } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagStyle extends IAttrMedia {}

export class style extends tag {
	constructor(public text: string, public attr?: IAttrTagStyle) {
		super("style", text, attr);
	}
}
