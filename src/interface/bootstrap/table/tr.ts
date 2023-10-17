import { IAttr } from "../../../core/tag.js";
import { bootstrapType } from "../../../core/bootstrap.js";

export interface tr extends IAttr {
	color?: bootstrapType.color;
	active?: boolean;
}
