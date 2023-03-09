import { consProp, IAttr, tag } from "../core/base/tag.js";

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
	constructor(attr: IAttrTagIframe, src: string);
	constructor(...arg: any[]) {
		super("iframe", consProp<IAttrTagIframe>("src", arg));
	}
}
