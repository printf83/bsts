import { consNoElem, IAttr, tag } from "../core/base/tag.js";

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
	constructor(attr: IAttrTagSource);
	constructor(...arg: any[]) {
		super("source", consNoElem<IAttrTagSource>(arg));
	}
}
