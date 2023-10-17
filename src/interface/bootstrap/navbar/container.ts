import { bootstrapType } from "../../../core/bootstrap.js";
import { IAttr } from "../../../core/tag.js";

export interface container extends IAttr {
	textColorRGB?: string;
	expand?: bootstrapType.viewport;
}
