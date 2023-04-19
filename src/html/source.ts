import { tagConsNoElemArg, IAttr, tag, genTagClass } from "../core/tag.js";

export interface ITagSource extends IAttr {
	media?: string;
	sizes?: string;
	src?: string;
	srcset?: string;
	type?: string;

	elem?: undefined;
}

export class source extends tag {
	constructor();
	constructor(attr: ITagSource);
	constructor(...arg: any[]) {
		super("source", tagConsNoElemArg<ITagSource>(arg));
	}
}

export const Source = (Attr?: ITagSource) => genTagClass<source, ITagSource>(source, Attr);
