import { IAttr, IElem } from "../../../../core/tag.js";
import { select as ISelect } from "../../select.js";

export interface select extends Omit<ISelect, "container"> {
	description?: string;
	container?: IAttr;

	before?: IElem;
	after?: IElem;

	invalidFeedback?: string;
	validFeedback?: string;
	invalidTooltip?: string;
	validTooltip?: string;
}
