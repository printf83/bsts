import { cons, IAttr, IElem, tag } from "../core/base/tag.js";

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
		super("form", cons<IAttr>(arg));
	}
}
