import { IAttr } from "../../core/tag.js";

export interface fieldset extends IAttr {
	disabled?: boolean;
	form?: string;
	name?: string;
}
