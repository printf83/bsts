import { IAttrAutofocus } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagTextarea extends IAttrAutofocus {}

export class textarea extends tag {
	constructor(public value?: string, public attr?: IAttrTagTextarea) {
		super("textarea", value, attr);
	}
}
