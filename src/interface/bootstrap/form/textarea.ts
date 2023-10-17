import { bootstrapType } from "../../../core/bootstrap.js";
import { IAttr, IElem } from "../../../core/tag.js";
import { textarea as ITextarea } from "../textarea.js";

export interface textarea extends Omit<ITextarea, "container"> {
	description?: string;
	container?: IAttr;

	hideLabel?: true;

	before?: IElem;
	after?: IElem;

	col1?: bootstrapType.col;
	col2?: bootstrapType.col;
	col3?: false | bootstrapType.col;

	invalidFeedback?: string;
	validFeedback?: string;
	invalidTooltip?: string;
	validTooltip?: string;
}
