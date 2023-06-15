import { IAttr, tag } from "../core/tag.js";

export interface Embed extends IAttr {
	src?: string;
	type?: string;
}

export class embed extends tag {
	constructor();
	constructor(type: string, src: string);
	constructor(attr: Embed);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("embed");
		} else if (arg.length === 2) {
			super("embed", { type: arg[0], src: arg[1] } as Embed);
		} else if (arg.length === 1) {
			super("embed", arg[0]);
		}
	}
}

export const Embed = (AttrOrType?: Embed | string, Src?: string) => {
	if (AttrOrType) {
		if (Src) {
			return new embed(AttrOrType as string, Src);
		} else {
			return new embed(AttrOrType as Embed);
		}
	} else {
		return new embed();
	}
};
