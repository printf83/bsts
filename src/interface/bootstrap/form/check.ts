import { IAttr } from "../../../core/tag.js";
import { input as IInput } from "../input.js";

export interface check extends Omit<IInput, "container"> {
	type?: "checkbox" | "radio";
	container?: IAttr;
	hideLabel?: true;
	inline?: true;
	reverse?: true;
	description?: string;

	invalidFeedback?: string;
	validFeedback?: string;
	invalidTooltip?: string;
	validTooltip?: string;
}
