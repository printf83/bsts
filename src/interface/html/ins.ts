import { attr } from "../core/attr.js";

export interface ins extends attr {
	cite?: string;
	datetime?: string | Date;
}
