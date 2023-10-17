import { IAttr } from "../../core/tag.js";

export interface meter extends IAttr {
	form?: string;
	high?: number;
	low?: number;
	max?: number;
	min?: number;
	optimum?: number;
	value?: number;
}
