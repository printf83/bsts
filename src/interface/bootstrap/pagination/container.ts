import { IElem } from "../../../core/tag.js";
import { ul as HUl } from "../../html/ul.js";

export interface container extends HUl {
	weight?: "sm" | "lg";

	total?: number;
	skip?: number;
	limit?: number;

	maxBtnCount?: number;
	firstLast?: boolean;
	nextPrev?: boolean;
	nextLable?: IElem;
	prevLabel?: IElem;
	firstLabel?: IElem;
	lastLabel?: IElem;
}
