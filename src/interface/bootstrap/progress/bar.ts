import { bootstrapType } from "../../../core/bootstrap.js";
import { IAttr } from "../../../core/tag.js";

export interface bar extends IAttr {
	color?: bootstrapType.color;
	striped?: boolean;
	animated?: boolean;
}
