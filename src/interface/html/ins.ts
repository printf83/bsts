import { IAttr } from "../../core/tag.js";

export interface ins extends IAttr {
	cite?: string;
	datetime?: string | Date;
}
