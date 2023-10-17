import { IAttr } from "../../core/tag.js";

export interface picture extends IAttr {
	dataText?: string;
	form?: string;
	name?: string;
	type?: string;
	typemustmatch?: boolean;
	usemap?: string;
}
