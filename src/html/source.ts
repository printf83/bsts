import { tagConsNoElemArg, IAttr, tag } from "../core/tag.js";

export interface Source extends IAttr {
	media?: string;
	sizes?: string;
	src?: string;
	srcset?: string;
	type?: string;

	elem?: undefined;
}

export class source extends tag {
	constructor();
	constructor(attr: Source);
	constructor(...arg: any[]) {
		super("source", tagConsNoElemArg<Source>(arg));
	}
}
