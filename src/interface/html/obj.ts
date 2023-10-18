import { attr } from "../core/attr.js";

export interface obj extends attr {
	dataText?: string;
	form?: string;
	name?: string;
	type?: string;
	typemustmatch?: boolean;
	usemap?: string;
}
