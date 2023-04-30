import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export interface Q extends IAttr {
	cite?: string;
}

export class q extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Q);
	constructor(attr: Q, elem: IElem);
	constructor(...arg: any[]) {
		super("q", tagConsArg<Q>("elem", arg));
	}
}

export const Q = (AttrOrElem?: Q | IElem, Elem?: IElem) => genTagClass<q, Q>(q, AttrOrElem, Elem);
