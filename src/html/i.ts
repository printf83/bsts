import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class i extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("i", tagConsArg("elem", arg));
	}
}

export const I = (AttrOrElem: IAttr | IElem, Elem?: IElem) => genTagClass<i, IAttr>(i, AttrOrElem, Elem);
