import { attr } from "../../../core/attr.js";
import { button } from "./button.js";
import { link } from "./link.js";

export interface containerNav extends attr {
	type?: "tab" | "pill" | "underline";
	itemWidth?: "fill" | "justified";
	vertical?: true;
	role?: "tablist";
	item?: button | button[];
	link?: link | link[];
}
