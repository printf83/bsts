import { IAttr, tag } from "../core/base/tag.js";

export interface IAttrTagEmbed extends IAttr {
	src?: string;
	type?: string;

	elem?: undefined;
}

export class embed extends tag {
	constructor(); //#1
	constructor(type: string, src: string); //#2
	constructor(attr: IAttrTagEmbed); //#3
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super("embed");
		} else if (arg.length === 2) {
			//#2
			super("embed", { type: arg[0], src: arg[1] } as IAttrTagEmbed);
		} else if (arg.length === 1) {
			//#3
			super("embed", arg[0]);
		}
	}

	static gen = (attrs: IAttrTagEmbed[]) => attrs.map((i) => new embed(i));
}
