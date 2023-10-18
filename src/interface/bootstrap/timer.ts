import { attr } from "../core/attr.js";

export interface timer extends attr {
	time?: number;
	callback?: Function;
}
