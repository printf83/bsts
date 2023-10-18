import { elem } from "../../core/elem.js";
import { ul as HUl } from "../../html/ul.js";

export interface container extends HUl {
	weight?: "sm" | "lg";

	total?: number;
	skip?: number;
	limit?: number;

	maxBtnCount?: number;
	firstLast?: boolean;
	nextPrev?: boolean;
	nextLable?: elem;
	prevLabel?: elem;
	firstLabel?: elem;
	lastLabel?: elem;
}
