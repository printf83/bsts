import { IAttr } from "../../core/tag.js";

export interface progress extends IAttr {
	max?: number;
	value?: number;
}
