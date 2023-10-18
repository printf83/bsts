import { attr } from "../core/attr.js";

export interface progress extends attr {
	max?: number;
	value?: number;
}
