import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class nav extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("nav", tagConsArg("elem", arg));
	}
}

export const Nav = (AttrOrElem?: IAttr | IElem, Elem?: IElem) => genTagClass<nav, IAttr>(nav, AttrOrElem, Elem);
