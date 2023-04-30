import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

export interface Meta extends IAttr {
	charset?: string;
	content?: string;
	httpEquiv?: "content-security-policy" | "content-type" | "default-style" | "refresh";
	name?: "application-name" | "author" | "description" | "generator" | "keywords" | "viewport";
}

export class meta extends tag {
	constructor();
	constructor(attr: Meta);
	constructor(...arg: any[]) {
		super("meta", tagConsNoElemArg<Meta>(arg));
	}
}

export const Meta = (Attr?: Meta) => genTagClass<meta, Meta>(meta, Attr);
