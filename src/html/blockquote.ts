import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagBlockquote extends IAttr {
	cite?: string;
}

export class blockquote extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagBlockquote);
	constructor(attr: ITagBlockquote, elem: IElem);
	constructor(...arg: any[]) {
		super("blockquote", tagConsArg<ITagBlockquote>("elem", arg));
	}
}

export const Blockquote = (AttrOrElem?: ITagBlockquote | IElem, Elem?: IElem) =>
	genTagClass<blockquote, ITagBlockquote>(blockquote, AttrOrElem, Elem);
