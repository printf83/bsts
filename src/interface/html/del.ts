import { IAttr } from "../../core/tag.js";

export interface Del extends IAttr {
	cite?: string;
	datetime?: string | Date;
}
