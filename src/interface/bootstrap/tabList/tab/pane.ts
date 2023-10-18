import { attr } from "../../../core/attr.js";

export interface pane extends attr {
	animation?: boolean;
	active?: boolean;
	role?: "tabpanel";
}
