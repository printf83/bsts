import { attr } from "../core/attr.js";

export interface del extends attr {
	cite?: string;
	datetime?: string | Date;
}
