import { attr } from "../../core/attr.js";
import { bsType } from "../../core/bsType.js";
import { elem } from "../../core/elem.js";
import { textarea as ITextarea } from "../textarea.js";

export interface textarea extends Omit<ITextarea, "container"> {
	description?: string;
	container?: attr;

	hideLabel?: true;

	before?: elem | elem[];
	after?: elem | elem[];

	col1?: bsType.col;
	col2?: bsType.col;
	col3?: false | bsType.col;

	invalidFeedback?: string;
	validFeedback?: string;
	invalidTooltip?: string;
	validTooltip?: string;
}
