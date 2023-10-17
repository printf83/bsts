import { IAttr } from "../../core/tag.js";

export interface script extends IAttr {
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
