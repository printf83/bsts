import { item } from "./item.js";
import { bsType } from "../../core/bsType.js";
import { elem } from "../../core/elem.js";

export interface create {
	elem: elem | elem[];
	animation?: boolean;
	color?: bsType.textBgColor;
	btnclosewhite?: boolean;
	delay?: number;
	atomic?: boolean;
	live?: item["live"];
	title?: elem | elem[];
}
