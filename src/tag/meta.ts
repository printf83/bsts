import { IAttr } from "../core/base/index.js";
import { tag } from "./index.js";

export interface IAttrTagMeta extends IAttr {
	charset?: string;
	content?: string;
	httpEquiv?: "content-security-policy" | "content-type" | "default-style" | "refresh";
	name?: "application-name" | "author" | "description" | "generator" | "keywords" | "viewport";
}

export class meta extends tag {
	constructor();
	constructor(attr: IAttrTagMeta);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("meta");
		} else if (arg.length === 1) {
			super("meta", arg[0], undefined);
		}
	}
}
