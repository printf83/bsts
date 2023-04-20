import { tagConsArg, IAttr, IElem, tag, genTagClass } from "../core/tag.js";

export class footer extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttr);
	constructor(attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		super("footer", tagConsArg("elem", arg));
	}
}

export const Footer = (AttrOrElem?: IAttr | IElem, Elem?: IElem) =>
	genTagClass<footer, IAttr>(footer, AttrOrElem, Elem);
