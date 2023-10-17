import { IAttr } from "../../core/tag.js";
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

export interface header extends IAttr {
	view?: Date;
	monthTitle?: string[];
}

/* main */
export interface calendar extends IAttr {
	multiple?: boolean;
	view?: Date;
	startDate?: Date;
	endDate?: Date;
	dayTitle?: string[];
	monthTitle?: string[];
}
