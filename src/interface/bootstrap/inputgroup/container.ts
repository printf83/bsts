import { IAttr } from "../../../core/tag.js";

export interface container extends IAttr {
	weight?: "sm" | "lg";
	noWarp?: true;
}
