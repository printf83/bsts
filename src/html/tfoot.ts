import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class tfoot extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("tfoot", tagConsArg("elem", arg));
	}
}

export const Tfoot = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<tfoot, IAttr>(tfoot, AttrOrElem, Elem);
