import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

export interface ITagScript extends IAttr {
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
	constructor(attr: ITagScript);
	constructor(...arg: any[]) {
		super("script", tagConsNoElemArg<ITagScript>(arg));
	}
}

export const Script = (Attr?: ITagScript) => genTagClass<script, ITagScript>(script, Attr);
