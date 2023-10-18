import { attr } from "../core/attr.js";

export interface td extends attr {
	colspan?: number;
	headers?: string;
	rowspan?: number;
}
