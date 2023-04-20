import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class noscript extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("noscript", tagConsArg("elem", arg));
	}
}

export const Noscript = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<noscript, IAttr>(noscript, AttrOrElem, Elem);
