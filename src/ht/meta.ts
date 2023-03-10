import { consNoElem, IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagMeta extends IAttr {
	charset?: string;
	content?: string;
	httpEquiv?: "content-security-policy" | "content-type" | "default-style" | "refresh";
	name?: "application-name" | "author" | "description" | "generator" | "keywords" | "viewport";

	elem?: undefined;
}

export class meta extends tag {
	constructor();
	constructor(attr: IAttrTagMeta);
	constructor(...arg: any[]) {
		super("meta", consNoElem<IAttrTagMeta>(arg));
	}
}
