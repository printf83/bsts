import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class b extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("b", tagConsArg("elem", arg));
	}
}

export const B = (AttrOrElem: IAttr | IElem, Elem?: IElem) => genTagClass<b, IAttr>(b, AttrOrElem, Elem);
