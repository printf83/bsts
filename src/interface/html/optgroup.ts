import { IAttr } from "../../core/tag.js";
import { option } from "./option.js";

export interface optgroup extends IAttr {
	disabled?: boolean;
	label?: string;
	attrLabel?: string;

	item?: option | option[];
}
