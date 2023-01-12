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
	constructor();
	constructor(src: string);
	constructor(attr: IAttrTagImg);
	constructor(src: string, attr: IAttrTagImg);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("img");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("img", { src: arg[0] } as IAttrTagImg, undefined);
			} else {
				super("img", arg[0], undefined);
			}
		} else if (arg.length === 2) {
			super("img", mergeObject(arg[1], { src: arg[0] } as IAttrTagImg), undefined);
		}
	}
}
