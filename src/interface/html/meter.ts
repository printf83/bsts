import { attr } from "../core/attr.js";

export interface meter extends attr {
	form?: string;
	high?: number;
	low?: number;
	max?: number;
	min?: number;
	optimum?: number;
	value?: number;
}
