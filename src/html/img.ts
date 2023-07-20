import { tagConsNoElemArg, IAttr, tag } from "../core/tag.js";

export interface Img extends IAttr {
	alt?: string;
	crossorigin?: "anonymous" | "use-credentials";
	ismap?: boolean;
	loadingStyle?: "eager" | "lazy";
	longdesc?: string;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "unsafe-url";
	sizes?: string;
	src?: string;
	srcset?: string;
	usemap?: string;
}

export class img extends tag {
	constructor();
	constructor(attr: Img);
	constructor(...arg: any[]) {
		super("img", tagConsNoElemArg<Img>(arg));
	}
}
