import { IAttr } from "../../core/tag.js";
import { bootstrapType } from "../../core/bootstrap.js";

export interface spinner extends IAttr {
	type?: "border" | "grow";
	small?: true;
	role?: "status";
	color?: bootstrapType.textColor;
}
