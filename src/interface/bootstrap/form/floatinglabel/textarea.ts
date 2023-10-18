import { attr } from "../../../core/attr.js";
import { elem } from "../../../core/elem.js";
import { textarea as ITextarea } from "../../textarea.js";

export interface textarea extends Omit<ITextarea, "container"> {
	description?: string;
	container?: attr;

	before?: elem | elem[];
	after?: elem | elem[];

	invalidFeedback?: string;
	validFeedback?: string;
	invalidTooltip?: string;
	validTooltip?: string;
}
