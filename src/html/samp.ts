import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class samp extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("samp", tagConsArg("elem", arg));
	}
}

export const Samp = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<samp, IAttr>(samp, AttrOrElem, Elem);
