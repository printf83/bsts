import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagForm extends IAttr {
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
	role?: string;
}

export class form extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagForm);
	constructor(attr: ITagForm, elem: IElem);
	constructor(...arg: any[]) {
		super("form", tagConsArg<ITagForm>("elem", arg));
	}
}

export const Form = (AttrOrElem?: ITagForm | IElem, Elem?: IElem) =>
	genTagClass<form, ITagForm>(form, AttrOrElem, Elem);
