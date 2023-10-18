import { attr } from "../../core/attr.js";
import { bsType } from "../../core/bsType.js";

export interface container extends attr {
	callout?: boolean;
	animation?: boolean;
	color?: bsType.alertColor;
	dismissible?: bsType.alertDismissible;
}
