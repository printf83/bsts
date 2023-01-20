import { IAttr, tag } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";

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
}

export class img extends tag {
	constructor(); //#1
	constructor(src: string); //#2
	constructor(attr: IAttrTagImg); //#3
	constructor(attr: IAttrTagImg, src: string); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super("img");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				//#2
				super("img", { src: arg[0] } as IAttrTagImg, undefined);
			} else {
				//#3
				super("img", arg[0], undefined);
			}
		} else if (arg.length === 2) {
			//#4
			super("img", mergeObject(arg[0], { src: arg[1] } as IAttrTagImg), undefined);
		}
	}
}
