import { item } from "./item.js";
import { bootstrapType } from "../../../core/bootstrap.js";
import { IElem } from "../../../core/tag.js";

export interface create {
	elem: IElem;
	animation?: boolean;
	color?: bootstrapType.textBgColor;
	btnclosewhite?: boolean;
	delay?: number;
	atomic?: boolean;
	live?: item["live"];
	title?: IElem;
}
