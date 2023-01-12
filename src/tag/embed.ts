import { IAttr, tag } from "../core/attach/_index.js";
import { mergeObject } from "../core/fn/mergeObject.js";

export interface IAttrTagEmbed extends IAttr {
	src?: string;
	type?: string;
}

export class embed extends tag {
	constructor();
	constructor(attr: IAttrTagEmbed);
	constructor(type: string, src: string);
	constructor(type: string, src: string, attr: IAttrTagEmbed);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("embed");
		} else if (arg.length === 1) {
			super("embed", arg[0], undefined);
		} else if (arg.length === 2) {
			super("embed", { type: arg[0], src: arg[1] } as IAttrTagEmbed, undefined);
		} else if (arg.length === 3) {
			super("embed", mergeObject(arg[2], { type: arg[0], src: arg[1] } as IAttrTagEmbed), undefined);
		}
	}
}
