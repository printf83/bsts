import { ul as BUl } from "../../../bootstrap/ul.js";
import { item } from "./item.js";
import { link } from "./link.js";
import { button } from "./button.js";

export interface container extends BUl {
	type?: "tab" | "pill" | "underline";
	itemWidth?: "fill" | "justified";
	vertical?: true;
	role?: "tablist";
	item?: item | item[];
	link?: link | link[];
	button?: button | button[];
}
