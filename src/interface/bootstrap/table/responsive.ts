import { attr } from "../../core/attr.js";
import { bsType } from "../../core/bsType.js";

export interface responsive extends attr {
	responsive?: bsType.viewport;
}
