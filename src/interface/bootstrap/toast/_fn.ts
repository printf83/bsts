import { item } from "./item.js";
import { bsType } from "../../core/bsType.js";
import { IElem } from "../../../core/tag.js";

export interface create {
	elem: IElem;
	animation?: boolean;
	color?: bsType.textBgColor;
	btnclosewhite?: boolean;
	delay?: number;
	atomic?: boolean;
	live?: item["live"];
	title?: IElem;
}
