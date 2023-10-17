import { bootstrapType } from "../../../core/bootstrap.js";
import { IAttr } from "../../../core/tag.js";

export interface itemDiv extends IAttr {
	active?: boolean;
	disabled?: boolean;
	action?: boolean;
	color?: bootstrapType.color;
	handleActive?: boolean;
}
