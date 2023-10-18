import { bsType } from "./bsType.js";

export interface bsAttr {
	theme?: bsType.theme; //[bs-theme="<theme>"]
	pointer?: bsType.pointer; //[role="button"]
	label?: string;
	labelledby?: string;
	ownby?: string;
	describedby?: string;
	controlfor?: string;

	gridArea?: string;
	gridTemplateColumns?: string;
	gridTemplateRows?: string;
	gridTemplateAreas?: string;
}
