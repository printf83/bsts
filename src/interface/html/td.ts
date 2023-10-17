import { IAttr } from "../../core/tag.js";

export interface td extends IAttr {
	colspan?: number;
	headers?: string;
	rowspan?: number;
}
