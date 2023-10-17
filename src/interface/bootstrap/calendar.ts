import { IAttr } from "../../core/tag.js";
import { Ul } from "../../html/ul.js";

/* item */
export interface Item extends Ul {
	multiple?: boolean;
	view?: Date;
	startDate?: Date;
	endDate?: Date;
	dayTitle?: string[];
}

/* header */

export interface Header extends IAttr {
	view?: Date;
	monthTitle?: string[];
}

/* main */
export interface Calendar extends IAttr {
	multiple?: boolean;
	view?: Date;
	startDate?: Date;
	endDate?: Date;
	dayTitle?: string[];
	monthTitle?: string[];
}
