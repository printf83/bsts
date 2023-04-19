import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface ITagButton extends IAttr {
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
	constructor(attr: ITagButton);
	constructor(attr: ITagButton, elem: IElem);
	constructor(...arg: any[]) {
		super("button", tagConsArg<ITagButton>("elem", arg));
	}
}
