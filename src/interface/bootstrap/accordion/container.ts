import { IAttr, IElem } from "../../../core/tag.js";

export interface containerItem {
	title: IElem;
	elem: IElem;
	show?: boolean;
}

export interface container extends IAttr {
	flush?: boolean;
	alwaysOpen?: boolean;
	item?: containerItem | containerItem[];
}
