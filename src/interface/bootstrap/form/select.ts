import { bootstrapType } from "../../../core/bootstrap.js";
import { IAttr, IElem } from "../../../core/tag.js";
import { select as ISelect } from "../select.js";

export interface select extends Omit<ISelect, "container"> {
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
