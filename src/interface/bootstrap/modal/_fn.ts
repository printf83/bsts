import { attr } from "../../core/attr.js";
import { elem } from "../../core/elem.js";
import { button } from "../button.js";
import { container } from "./container.js";
import { header } from "./header.js";

export type customStyleButton = 1 | 2;

export interface btnItem {
	color?: button["color"];
	elem: elem;
	click?: EventListener;
}

export type btnType =
	| "ok"
	| "cancel"
	| "yes"
	| "no"
	| "retry"
	| "continue"
	| "delete"
	| "save"
	| "savechanges"
	| "agree"
	| "disagree"
	| "reject"
	| "close"
	| "yesdelete"
	| "yessave"
	| "yescontinue"
	| "yesenable"
	| "nothanks";

export interface btnItemDB {
	color?: button["color"];
	elem: elem;
}

export interface create extends Omit<container, "title"> {
	customStyle?: customStyleButton;
	btn?: btnType | btnType[];
	btnFn?: EventListener | EventListener[];
	title?: elem;
	elem?: elem;

	attrHeader?: header;
	attrBody?: attr;
	attrFooter?: attr;
}
