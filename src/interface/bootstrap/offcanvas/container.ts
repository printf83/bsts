import { bsType } from "../../core/bsType.js";
import { attr } from "../../core/attr.js";

export interface container extends attr {
	placement?: "start" | "end" | "top" | "bottom";
	show?: boolean | bsType.viewport;
	dark?: boolean;
	backdrop?: boolean | "static";
	scroll?: boolean;
	labelledby?: string;

	debug?: boolean;
}
