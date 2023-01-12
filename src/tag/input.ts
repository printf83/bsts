import { IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagInput extends IAttr {
	accept?: string;
	alt?: string;
	autocomplete?: "on" | "off";
	autofocus?: boolean;
	checked?: boolean;
	dirname?: string;
	disabled?: boolean;
	form?: string;
	formaction?: string;
	formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain	";
	formmethod?: "get" | "post";
	formnovalidate?: boolean;
	formtarget?: string;
	list?: string;
	max?: number | Date;
	maxlength?: number;
	min?: number | Date;
	minlength?: number;
	multiple?: boolean;
	name?: string;
	pattern?: string;
	placeholderText?: string;
	readonly?: boolean;
	required?: boolean;
	size?: number;
	src?: string;
	step?: string | number;
	type?:
		| "button"
		| "checkbox"
		| "color"
		| "date"
		| "datetime-local"
		| "email"
		| "file"
		| "hidden"
		| "image"
		| "month"
		| "number"
		| "password"
		| "radio"
		| "range"
		| "reset"
		| "search"
		| "submit"
		| "tel"
		| "text"
		| "time"
		| "url"
		| "week";
	value?: string | number;
}

export class input extends tag {
	constructor();
	constructor(attr: IAttrTagInput);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("input");
		} else if (arg.length === 1) {
			super("input", arg[0], undefined);
		}
	}
}
