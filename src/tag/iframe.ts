import { IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagIframe extends IAttr {
	allowfullscreen?: boolean;
	allowpaymentrequest?: boolean;
	loading?: "eager" | "lazy";
	name?: string;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	sandbox?:
		| "allow-forms"
		| "allow-pointer-lock"
		| "allow-popups"
		| "allow-same-origin"
		| "allow-scripts"
		| "allow-top-navigation";
	src?: string;
	srcdoc?: string;
}

export class iframe extends tag {
	constructor();
	constructor(src: string);
	constructor(attr: IAttrTagIframe);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("iframe");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("iframe", { src: arg[0] } as IAttrTagIframe);
			} else {
				super("iframe", arg[0]);
			}
		}
	}

	static gen = (attrs: IAttrTagIframe[]) => attrs.map((i) => new iframe(i));
}
