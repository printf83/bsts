import { IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagForm extends IAttr {
	acceptCharset?: string;
	action?: string;
	autocomplete?: "on" | "off";
	enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain	";
	method?: "get" | "post";
	name?: string;
	novalidate?: boolean;
	rel?:
		| "external"
		| "help"
		| "license"
		| "next"
		| "nofollow"
		| "noopener"
		| "noreferrer"
		| "opener"
		| "prev"
		| "search";
	target?: "_blank" | "_self" | "_parent" | "_top";
}

export class form extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagForm);
	constructor(attr: IAttrTagForm, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("form");
		} else if (arg.length === 1) {
			super("form", arg[0]);
		} else if (arg.length === 2) {
			super("form", arg[0], arg[1]);
		}
	}
}
