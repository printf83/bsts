import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface ITagQ extends IAttr {
	cite?: string;
}

export class q extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: ITagQ);
	constructor(attr: ITagQ, elem: IElem);
	constructor(...arg: any[]) {
		super("q", tagConsArg<ITagQ>("elem", arg));
	}
}

export const Q = (AttrOrElem?: ITagQ | IElem, Elem?: IElem) => genTagClass<q, ITagQ>(q, AttrOrElem, Elem);
