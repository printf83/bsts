import { consProp, IAttr, tag } from "../core/base/tag.js";

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
	constructor(attr: IAttrTagSource, src: string);
	constructor(...arg: any[]) {
		super("source", consProp<IAttrTagSource>("src", arg));
	}
}
