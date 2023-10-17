import { IAttr } from "../../core/tag.js";

export interface textarea extends IAttr {
	autofocus?: boolean;
	cols?: number;
	dirname?: string;
	disabled?: boolean;
	form?: string;
	maxlength?: number;
	name?: string;
	placeholder?: string;
	readonly?: boolean;
	required?: boolean;
	rows?: number;
	wrap?: "hard" | "soft";
	value?: string;
}
