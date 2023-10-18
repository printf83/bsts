import { attr } from "../../../core/attr.js";

export interface item extends attr {
	active?: boolean;
	role?: "tabpanel";
	labelledby?: string;
	tabindex?: string | number;
	animation?: boolean;
}
