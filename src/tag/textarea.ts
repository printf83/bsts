import { IAttrAutofocus, IAttrCols } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTextarea extends IAttrAutofocus, IAttrCols {}

export class textarea extends tag {
	constructor(public value?: string, public attr?: IAttrTagTextarea) {
		super("textarea", value, attr);
	}
}
