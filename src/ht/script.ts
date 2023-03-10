import { consNoElem, IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagScript extends IAttr {
	async?: boolean;
	crossorigin?: "anonymous" | "use-credentials";
	defer?: boolean;
	integrity?: string;
	nomodule?: boolean;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	src?: string;
	type?: string;
}

export class script extends tag {
	constructor();
	constructor(attr: IAttrTagScript);
	constructor(...arg: any[]) {
		super("script", consNoElem<IAttrTagScript>(arg));
	}
}
