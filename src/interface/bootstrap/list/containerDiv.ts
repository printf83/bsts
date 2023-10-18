import { bsType } from "../../core/bsType.js";
import { attr } from "../../core/attr.js";

export interface containerDiv extends attr {
	flush?: boolean;
	numbered?: boolean;
	horizontal?: boolean | bsType.viewport;
}
