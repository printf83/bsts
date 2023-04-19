import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class header extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("header", tagConsArg("elem", arg));
	}
}

export const Header = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<header, IAttr>(header, AttrOrElem, Elem);
