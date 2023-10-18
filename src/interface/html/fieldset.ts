import { attr } from "../core/attr.js";

export interface fieldset extends attr {
	disabled?: boolean;
	form?: string;
	name?: string;
}
