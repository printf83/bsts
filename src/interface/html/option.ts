import { IAttr } from "../../core/tag.js";

export interface option extends IAttr {
	disabled?: boolean;
	selected?: boolean;
	value?: string;
}
