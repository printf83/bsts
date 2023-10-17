import { IAttr } from "../../../core/tag.js";
import { bootstrapType } from "../../../core/bootstrap.js";

export interface responsive extends IAttr {
	responsive?: bootstrapType.viewport;
}
