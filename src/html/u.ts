import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class u extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("u", tagConsArg("elem", arg));
	}
}

export const U = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<u, IAttr>(u, AttrOrElem, Elem);
