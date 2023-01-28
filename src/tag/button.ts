import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagButton extends IAttr {
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	formaction?: string;
	formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain	";
	formmethod?: "get" | "post";
	formnovalidate?: boolean;
	formtarget?: string;
	name?: string;
	type?: "button" | "reset" | "submit";
	value?: string;
}

export class button extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagButton);
	constructor(attr: IAttrTagButton, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("button");
		} else if (arg.length === 1) {
			super("button", arg[0]);
		} else if (arg.length === 2) {
			super("button", arg[0], arg[1]);
		}
	}
}
