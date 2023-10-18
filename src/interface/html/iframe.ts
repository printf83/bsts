import { IAttr } from "../../core/tag.js";

export interface iframe extends IAttr {
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