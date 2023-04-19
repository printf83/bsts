import { tagConsNoElemArg, IAttr, tag } from "../core/tag.js";

export interface ITagMeta extends IAttr {
	charset?: string;
	content?: string;
	httpEquiv?: "content-security-policy" | "content-type" | "default-style" | "refresh";
	name?: "application-name" | "author" | "description" | "generator" | "keywords" | "viewport";
}

export class meta extends tag {
	constructor();
	constructor(attr: ITagMeta);
	constructor(...arg: any[]) {
		super("meta", tagConsNoElemArg<ITagMeta>(arg));
	}
}
