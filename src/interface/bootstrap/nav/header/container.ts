import { ul as HUl } from "../../../html/ul.js";
import { item } from "./item.js";
import { link } from "./link.js";
import { button } from "./button.js";

export interface container extends Omit<HUl, "item"> {
	type?: "tab" | "pill" | "underline";
	itemWidth?: "fill" | "justified";
	vertical?: true;
	role?: "tablist";
	item?: item | item[];
	link?: link | link[];
	button?: button | button[];
}
