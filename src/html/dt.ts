import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class dt extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("dt", tagConsArg("elem", arg));
	}
}

export const Dt = (AttrOrElem: IAttr | IElem, Elem?: IElem) => genTagClass<dt, IAttr>(dt, AttrOrElem, Elem);
