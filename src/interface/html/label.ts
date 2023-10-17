import { IAttr } from "../../core/tag.js";

export interface label extends IAttr {
	for?: string;
	form?: string;
}
