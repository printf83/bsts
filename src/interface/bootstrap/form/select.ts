import { attr } from "../../core/attr.js";
import { bsType } from "../../core/bsType.js";
import { elem } from "../../core/elem.js";
import { select as ISelect } from "../select.js";

export interface select extends Omit<ISelect, "container"> {
	description?: string;
	container?: attr;

	hideLabel?: true;

	before?: elem;
	after?: elem;

	col1?: bsType.col;
	col2?: bsType.col;
	col3?: false | bsType.col;

	invalidFeedback?: string;
	validFeedback?: string;
	invalidTooltip?: string;
	validTooltip?: string;
}
