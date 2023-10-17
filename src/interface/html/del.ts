import { IAttr } from "../../core/tag.js";

export interface del extends IAttr {
	cite?: string;
	datetime?: string | Date;
}
