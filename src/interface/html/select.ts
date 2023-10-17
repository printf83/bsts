import { IAttr, IElem } from "../../core/tag.js";
import { optgroup } from "./optgroup.js";
import { option } from "./option.js";

export interface selectItem extends option, optgroup {
	value?: string;
	label?: string;
	elem?: IElem;
	selected?: boolean;

	item?: selectItem | selectItem[];
}

export interface select extends IAttr {
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	multiple?: boolean;
	name?: string;
	required?: boolean;
	size?: number;

	item?: selectItem | selectItem[];
}
