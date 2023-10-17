import { IAttr } from "../../core/tag.js";

export interface timer extends IAttr {
	time?: number;
	callback?: Function;
}
