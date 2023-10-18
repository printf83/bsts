import { attr } from "../../../core/attr.js";
import { elem } from "../../../core/elem.js";
import { select as ISelect } from "../../select.js";

export interface select extends Omit<ISelect, "container"> {
	description?: string;
	container?: attr;

	before?: elem;
	after?: elem;

	invalidFeedback?: string;
	validFeedback?: string;
	invalidTooltip?: string;
	validTooltip?: string;
}
