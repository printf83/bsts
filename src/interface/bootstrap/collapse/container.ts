import { attr } from "../../core/attr.js";

export interface container extends attr {
	horizontal?: true;
	autoInit?: boolean;
	parent?: string;
	show?: boolean;
}
