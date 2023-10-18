import { bsType } from "../../core/bsType.js";
import { attr } from "../../core/attr.js";

export interface container extends attr {
	backdrop?: boolean | "static";
	focus?: boolean;
	keyboard?: boolean;

	weight?: "sm" | "lg" | "xl";
	fullscreen?: true | bsType.viewport;
	view?: "center" | "end";
	scrollable?: boolean;
	animation?: boolean;

	dialogAttr?: attr;
	contentAttr?: attr;

	debug?: boolean;
}
