import { IAttr } from "../../../core/tag.js";
import { bootstrapType } from "../../../core/bootstrap.js";

export interface container extends IAttr {
	callout?: boolean;
	animation?: boolean;
	color?: bootstrapType.alertColor;
	dismissible?: bootstrapType.alertDismissible;
}
