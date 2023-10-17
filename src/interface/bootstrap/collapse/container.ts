import { IAttr } from "../../../core/tag.js";

export interface container extends IAttr {
	horizontal?: true;
	autoInit?: boolean;
	parent?: string;
	show?: boolean;
}
