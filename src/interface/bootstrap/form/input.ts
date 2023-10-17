import { bootstrapType } from "../../../core/bootstrap.js";
import { IAttr, IElem } from "../../../core/tag.js";
import { datalist } from "../../html/datalist.js";
import { input as IInput } from "../input.js";

export interface input extends Omit<IInput, "container"> {
	type?:
		| "button"
		| "color"
		| "date"
		| "datetime-local"
		| "email"
		| "file"
		| "hidden"
		| "image"
		| "month"
		| "number"
		| "password"
		| "range"
		| "reset"
		| "search"
		| "submit"
		| "tel"
		| "text"
		| "time"
		| "url"
		| "week";
	description?: string;
	datalist?: datalist["item"];
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
