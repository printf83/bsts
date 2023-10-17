import { IAttr } from "../../core/tag.js";
import { Option } from "./option.js";

export interface optgroup extends IAttr {
	disabled?: boolean;
	label?: string;
	attrLabel?: string;

	item?: Option | Option[];
}
