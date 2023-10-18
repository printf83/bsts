import { attr } from "../core/attr.js";
import { elem } from "../core/elem.js";

export interface ul extends attr {
	unstyle?: boolean;
	inline?: boolean;
	item?: elem | elem[];
}
