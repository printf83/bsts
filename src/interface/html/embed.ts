import { IAttr } from "../../core/tag.js";

export interface Embed extends IAttr {
	src?: string;
	type?: string;
}
