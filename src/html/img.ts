import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

export interface ITagImg extends IAttr {
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
	constructor(); //#1
	constructor(attr: ITagImg); //#3
	constructor(...arg: any[]) {
		super("img", tagConsNoElemArg<ITagImg>(arg));
	}
}

export const Img = (Attr?: ITagImg) => genTagClass<img, ITagImg>(img, Attr);
