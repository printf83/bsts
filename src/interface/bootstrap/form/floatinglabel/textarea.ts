import { IAttr, IElem } from "../../../../core/tag.js";
import { textarea as ITextarea } from "../../textarea.js";

export interface textarea extends Omit<ITextarea, "container"> {
	description?: string;
	container?: IAttr;

	before?: IElem;
	after?: IElem;

	invalidFeedback?: string;
	validFeedback?: string;
	invalidTooltip?: string;
	validTooltip?: string;
}
