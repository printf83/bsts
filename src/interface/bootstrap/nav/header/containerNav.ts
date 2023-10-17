import { IAttr } from "../../../../core/tag.js";
import { button } from "./button.js";
import { link } from "./link.js";

export interface containerNav extends IAttr {
	type?: "tab" | "pill" | "underline";
	itemWidth?: "fill" | "justified";
	vertical?: true;
	role?: "tablist";
	item?: button | button[];
	link?: link | link[];
}
