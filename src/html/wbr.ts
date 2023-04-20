import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class wbr extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("wbr", tagConsArg("elem", arg));
	}
}

export const Wbr = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<wbr, IAttr>(wbr, AttrOrElem, Elem);
