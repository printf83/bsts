import { attr } from "../core/attr.js";
import { elem } from "../core/elem.js";

export interface ol extends attr {
	unstyle?: boolean;
	inline?: boolean;
	reversed?: boolean;
	startValue?: number;

	item?: elem | elem[];
}
