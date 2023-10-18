import { attr } from "../../core/attr.js";
import { elem } from "../../core/elem.js";

export interface containerItem {
	title: elem | elem[];
	elem: elem | elem[];
	show?: boolean;
}

export interface container extends attr {
	flush?: boolean;
	alwaysOpen?: boolean;
	item?: containerItem | containerItem[];
}
