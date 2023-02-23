import { IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagSource extends IAttr {
	media?: string;
	sizes?: string;
	src?: string;
	srcset?: string;
	type?: string;

	elem?: undefined;
}

export class source extends tag {
	constructor();
	constructor(src: string);
	constructor(attr: IAttrTagSource);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("source");
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				super("source", { src: arg[0] } as IAttrTagSource);
			} else {
				super("source", arg[0]);
			}
		}
	}
}