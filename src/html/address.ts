import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class address extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("address", tagConsArg("elem", arg));
	}
}

export const Address = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<address, IAttr>(address, AttrOrElem, Elem);
