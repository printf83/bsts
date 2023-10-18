import { attr } from "../core/attr.js";

export interface label extends attr {
	for?: string;
	form?: string;
}
