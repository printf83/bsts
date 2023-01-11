import { IAttrSpan } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagCol extends IAttrSpan {}

export class col extends tag {
	constructor(public attr?: IAttrTagCol) {
		super("col", attr);
	}
}
