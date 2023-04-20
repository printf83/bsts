import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

export interface ITagIframe extends IAttr {
	allowfullscreen?: boolean;
	allowpaymentrequest?: boolean;
	loadingStyle?: "eager" | "lazy";
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
	constructor(attr: ITagIframe);
	constructor(...arg: any[]) {
		super("iframe", tagConsNoElemArg<ITagIframe>(arg));
	}
}

export const Iframe = (Attr?: ITagIframe) => genTagClass<iframe, ITagIframe>(iframe, Attr);
