import { attr } from "../core/attr.js";
import { elem } from "../core/elem.js";
import { optgroup } from "./optgroup.js";
import { option } from "./option.js";

export interface selectItem extends option, optgroup {
	value?: string;
	label?: string;
	elem?: elem;
	selected?: boolean;

	item?: selectItem | selectItem[];
}

export interface select extends attr {
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	multiple?: boolean;
	name?: string;
	required?: boolean;
	size?: number;

	item?: selectItem | selectItem[];
}
