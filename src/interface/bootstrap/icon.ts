import { attr } from "../core/attr.js";

// export type iconType = "bi";

export interface icon extends attr {
	id?: string;
	type?: "bi";
	handleBubble?: boolean;
}
