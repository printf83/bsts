import { bootstrapType } from "../../../core/bootstrap.js";
import { IAttr } from "../../../core/tag.js";

export interface containerDiv extends IAttr {
	flush?: boolean;
	numbered?: boolean;
	horizontal?: boolean | bootstrapType.viewport;
}
