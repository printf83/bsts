import { attr } from "../core/attr.js";
import { ul as HUl } from "../html/ul.js";

/* item */
export interface item extends HUl {
	multiple?: boolean;
	view?: Date;
	startDate?: Date;
	endDate?: Date;
	dayTitle?: string[];
}

/* header */

export interface header extends attr {
	view?: Date;
	monthTitle?: string[];
}

/* main */
export interface container extends attr {
	multiple?: boolean;
	view?: Date;
	startDate?: Date;
	endDate?: Date;
	dayTitle?: string[];
	monthTitle?: string[];
}
