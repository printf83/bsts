import { IAttr } from "../../core/tag.js";

export interface Fieldset extends IAttr {
	disabled?: boolean;
	form?: string;
	name?: string;
}
