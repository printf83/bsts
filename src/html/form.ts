import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface Form extends IAttr {
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
	constructor(attr: Form);
	constructor(attr: Form, elem: IElem);
	constructor(...arg: any[]) {
		super("form", tagConsArg<Form>("elem", arg));
	}
}
