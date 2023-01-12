import { IAttr } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { tag } from "./index.js";

export interface IAttrTagSource extends IAttr {
	media?: string;
	sizes?: string;
	src?: string;
	srcset?: string;
	type?: string;
}

export class source extends tag {
	constructor();
	constructor(src: string);
	constructor(attr: IAttrTagSource);
	constructor(src: string, attr: IAttrTagSource);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("source");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("source", { src: arg[0] } as IAttrTagSource, undefined);
			} else {
				super("source", arg[0], undefined);
			}
		} else if (arg.length === 2) {
			super("source", mergeObject(arg[1], { src: arg[0] } as IAttrTagSource), undefined);
		}
	}
}
