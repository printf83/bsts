import { IAttr } from "../../core/tag.js";

export interface style extends IAttr {
	media?: string;
	type?: "text/css";
}
