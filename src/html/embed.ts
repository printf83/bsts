import { IAttr, tag } from "../core/tag.js";

export interface ITagEmbed extends IAttr {
	src?: string;
	type?: string;
}

export class embed extends tag {
	constructor(); //#1
	constructor(type: string, src: string); //#2
	constructor(attr: ITagEmbed); //#3
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super("embed");
		} else if (arg.length === 2) {
			//#2
			super("embed", { type: arg[0], src: arg[1] } as ITagEmbed);
		} else if (arg.length === 1) {
			//#3
			super("embed", arg[0]);
		}
	}
}

export const Embed = (AttrOrType?: ITagEmbed | string, Src?: string) => {
	if (AttrOrType) {
		if (Src) {
			return new embed(AttrOrType as string, Src);
		} else {
			return new embed(AttrOrType as ITagEmbed);
		}
	} else {
		return new embed();
	}
};
