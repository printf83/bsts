import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface Blockquote extends IAttr {
	cite?: string;
}

export class blockquote extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Blockquote);
	constructor(attr: Blockquote, elem: IElem);
	constructor(...arg: any[]) {
		super("blockquote", tagConsArg<Blockquote>("elem", arg));
	}
}

export const Blockquote = (AttrOrElem?: Blockquote | IElem, Elem?: IElem) =>
	genTagClass<blockquote, Blockquote>(blockquote, AttrOrElem, Elem);
