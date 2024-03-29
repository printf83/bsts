import { attr } from "../core/attr.js";

export interface input extends attr {
	accept?: string;
	alt?: string;
	autocomplete?: "on" | "off";
	autofocus?: boolean;
	checked?: boolean;
	indeterminate?: boolean;
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
	placeholder?: string;
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
