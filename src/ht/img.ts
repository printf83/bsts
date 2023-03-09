import { consProp, IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagImg extends IAttr {
	alt?: string;
	crossorigin?: "anonymous" | "use-credentials";
	ismap?: boolean;
	loading?: "eager" | "lazy";
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

	elem?: undefined;
}

export class img extends tag {
	constructor(); //#1
	constructor(src: string); //#2
	constructor(attr: IAttrTagImg); //#3
	constructor(attr: IAttrTagImg, src: string); //#4
	constructor(...arg: any[]) {
		super("img", consProp<IAttrTagImg>("src", arg));
	}
}
