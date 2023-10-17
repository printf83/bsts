import { bootstrapType } from "../../../core/bootstrap.js";
import { IAttr } from "../../../core/tag.js";

export interface container extends IAttr {
	backdrop?: boolean | "static";
	focus?: boolean;
	keyboard?: boolean;

	weight?: "sm" | "lg" | "xl";
	fullscreen?: true | bootstrapType.viewport;
	view?: "center" | "end";
	scrollable?: boolean;
	animation?: boolean;

	dialogAttr?: IAttr;
	contentAttr?: IAttr;

	debug?: boolean;
}
