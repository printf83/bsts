import { attr } from "../core/attr.js";

export interface option extends attr {
	disabled?: boolean;
	selected?: boolean;
	value?: string;
}
