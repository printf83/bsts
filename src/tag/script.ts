import { IAttr, tag } from "../core/base/tag.js";

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
	constructor(type: string, src: string);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("script");
		} else if (arg.length === 1) {
			super("script", arg[0]);
		} else if (arg.length === 2) {
			super("script", { type: arg[0], src: arg[1] } as IAttrTagScript);
		}
	}

	static gen = (attrs: IAttrTagScript[]) => attrs.map((i) => new script(i));
}
